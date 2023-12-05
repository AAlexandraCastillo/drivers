
export default(data)=>{
    let errors={}
 if (!/^[a-zA-Z\s]+$/.test(data.name)){errors.name='El nombre no puede contener simbolos ni numeros'}
 if(!/^[A-Z]/.test(data.name.split(' ')[0])){errors.name1='El nombre debe comenzar con letra mayuscula'}
 if(!/^[a-zA-Z\s]+$/.test(data.surname) || !/^\S+$/.test(data.surname)){errors.surname='El apellido no puede contener simbolos,numeros ni espacios'}
 if(!/^[A-Z]/.test(data.surname.split(' ')[0])){errors.surname1='El apellido debe comenzar con letra mayuscula'}
 if(data.description.length < 6){errors.desc='La decripcion debe tener 6 caracteres como minimo'}
 if(!/^(http|https):\/\/.*\.(jpg|jpeg|png|gif)$/.test(data.image)){errors.image='Formato incorrecto'}
 if(!/^[a-zA-Z\s]+$/.test(data.nationality)   ){errors.nat='La nacionalidad no debe contener numeros ni simbolos'}

 if(!/^[A-Z]/.test(data.nationality.split(' ')[0])){errors.nat1='La nacionalidad debe comenzar con mayuscula'}
 if(data.dob.length <1 ){errors.dob='debe seleccionar dia,mes y año'}
 if(data.teams.length<1){errors.teams='Debe seleccionar al menos un team'}
 return errors
};