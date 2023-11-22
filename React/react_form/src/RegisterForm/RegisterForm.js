import React, { Component } from 'react'
import Input from '../Input/Input'

class RegisterForm extends Component {
  state = {
    formData: {
      name: {
        value: "",
        validator: {
          minLength: 3,
          maxLength: 6,
          required: true
        },
        error: { status: true, message: "", isTouched: false }    //ถ้า status เป็น true ==> มี error
      },
      phoneNumber: {
        value: "",
        validator: {
          minLength: 10,
          maxLength: 10
        },
        error: { status: true, message: "", isTouched: false }
      },
      email: {
        value: "",
        validator: {
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
      password: {
        value: "",
        validator: {
          minLength: 6,
          maxlength: 24,
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
    },
    isFormValid: false,   //เช็คว่ากรอกค่าใน form ถูกต้องมั้ย (ถ้าถูกค่าจะเป็น true)
  }

  checkValue = (value, rules) => {
    let isValid = true;
    let message = "";
    let trimmedValue = value.trim();  //เอาช่องว่างที่หัวกับท้ายคำออก
    
    if (rules.maxLength && trimmedValue.length > rules.maxLength){    //shortcircuit ถ้าอันแรก false จะไม่ทำอันหลังต่อ
      isValid = false;
      message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัว`;
    }
    
    if (rules.minLength && trimmedValue.length < rules.minLength){
      isValid = false;
      message = `ช่องนี้ความยาวต้องอย่างน้อย ${rules.minLength} ตัว`;
    }
    
    if(rules.required && trimmedValue.length === 0){  
        isValid = false;
        message = "คุณต้องกรอกช่องนี้"
    }

    return { isValid, message };
  }

  onChangeInput = (e) => {
    const fieldName = e.target.name; //มาจาก name ของ input
    const fieldValue = e.target.value; //มาจากค่าที่กรอกเข้าไปในช่อง input
    const updatedForm = {...this.state.formData};    //ก๊อปค่ามาจาก formData (เปลี่ยนaddress เพื่อให้ stateเปลี่ยน)
    updatedForm[fieldName].value = fieldValue  //เข้าถึงตำแหน่ง value แล้วอัพเดทค่า valueใหม่ => ไปบรรทัด 85

    let { isValid, message } = this.checkValue(e.target.value, updatedForm[fieldName].validator);   //เช็คว่าค่าที่กรอกตรงกับกฎมั้ย

    updatedForm[fieldName].error.status = !isValid;
    updatedForm[fieldName].error.message = message;
    updatedForm[fieldName].error.isTouched = true;

    let newIsFormValid = true;
    for(let fn in updatedForm){
      if(updatedForm[fn].validator.required === true){
        newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;   //ถ้ามี error แม้แต่อันเดียว   newIsFormValid จะเป็น false
      }
    }

    this.setState({
      formData: updatedForm,    //อัพเดท formData
      isFormValid: newIsFormValid
    })
  }

onSubmitForm = (e) => {
  e.preventDefault();   //ป้องกันการ refresh
  console.log(this.state)
}

  render() {
    const { name, phoneNumber, email, password } = this.state.formData //ทำให้เขียนสั้นลง (จาก this.state.name เป็น name)
    const { isFormValid } = this.state;

    return (
      <div className='RegisterForm'>
        <form onSubmit={this.onSubmitForm}>
            {/*เมื่อเกิดการเปลี่ยนแปลงค่าในช่อง input จะเรียกใช้ฟังก์ชันที่อยู่ใน onChange */} {/*ค่าเปลี่ยนแปลงจะถูกเอาไปอัพเดท state แล้วเราค่อยเรียกค่ามาใส่ใน value เพื่อส่งไปใช้งานต่อ*/}
          <Input 
            onChangeInput={this.onChangeInput} 
            value={name.value} 
            name="name" 
            placeholder="ชื่อ" 
            error={name.error} />    
          <Input 
            onChangeInput={this.onChangeInput} 
            value={phoneNumber.value} 
            name="phoneNumber" 
            placeholder="เบอร์โทรศัพท์" 
            error={phoneNumber.error} />    
          <Input 
            onChangeInput={this.onChangeInput} 
            value={email.value} 
            name="email" 
            placeholder="อีเมล" 
            error={email.error} />    
          <Input 
            onChangeInput={this.onChangeInput}
            value={password.value} 
            name="password" 
            placeholder="รหัสผ่าน" 
            error={password.error} />    
          <button disabled={!isFormValid} htmlFor="submit" className='Button'>Register</button>
                  {/* ถ้าformถูก ให้กดbuttonได้ */}
        </form>
      </div>
    )
  }
}

export default RegisterForm
