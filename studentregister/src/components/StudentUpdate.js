import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Card, Spinner } from '../ortak';
import { Picker } from '@react-native-picker/picker';
import { studentChange, studentUpdate, studentDelete } from '../actions';

class StudentUpdate extends Component {
    state = {isim:'',soyisim:'',ogrencinumara:'',sube:''};

    componentDidMount(){
        const { isim, soyisim, ogrencinumara, sube } = this.props.student;

        this.setState({isim,soyisim,ogrencinumara,sube});
    }

    

  clickDelete() {
 this.props.studentDelete({uid: this.props.student.uid});
  }
  clickUpdate() {
    const { isim, soyisim, ogrencinumara, sube } = this.state;

    this.props.studentUpdate({ isim, soyisim, ogrencinumara, sube , uid: this.props.student.uid});
  }

  renderButton() {
    if (!this.props.loadingUpdate) {
      return <Button onPress={this.clickUpdate.bind(this)}> GÜNCELLE </Button>;
    }
    return <Spinner size='small' />;
  }

  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return <Button onPress={this.clickDelete.bind(this)}> SİL </Button>;
    }
    return <Spinner size='small' />;
  }

  render() {
    console.log('gelen data ' + this.props.student);
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder='isim'
            style={inputStyle}
            value={this.state.isim}
            onChangeText={isim => this.setState({isim})}
            
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder='soyisim'
            style={inputStyle}
            value={this.state.soyisim}
            onChangeText={soyisim => this.setState({soyisim})}
            
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder='Öğrenci Numarası'
            style={inputStyle}
            value={this.state.ogrencinumara}
            onChangeText={ogrencinumara => this.setState({ogrencinumara})}
            
          />
        </CardSection>

        <CardSection>
          <Text>Şube</Text>

          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.sube}
            onValueChange={(sube) =>
                this.setState({sube})
            }>
            <Picker.Item label='A şubesi' value='asube' />
            <Picker.Item label='B şubesi' value='bsube' />
            <Picker.Item label='C şubesi' value='csube' />
            <Picker.Item label='D şubesi' value='dsube' />
          </Picker>
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>
        <CardSection>{this.renderDeleteButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
};
const mapToStateProps = ({ studentUpdateResponse }) => {
  const { loadingUpdate,loadingDelete } = studentUpdateResponse;

  return {
    loadingUpdate,
    loadingDelete
  };
};

export default connect(mapToStateProps, { studentChange, studentUpdate, studentDelete })(
  StudentUpdate,
);
