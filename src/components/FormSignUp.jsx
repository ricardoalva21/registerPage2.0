import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { FormControl } from "@mui/material"

function FormSignUp({ handleSubmit }) {
	const [name, setName] = useState("")
	const [lastName, setLastName] =
		useState("")
	const [email, setEmail] = useState("")
	const [prom, setProm] = useState(true)
	const [nov, setNov] = useState(false)


	// Aqui se definen los errores para las validaciones
	const [errors, setErrors] = useState({
		name: {
			error: false,
			message:
				"",
		},
		lastName:{
			error: false,
			message: '',
		},
		email:{
			error:false,
			message: ''
		}
	});

	
	function validarNombre(nombre) {
		if (nombre.length >= 3) {
			setErrors((prevErrors) => ({
				...prevErrors, name:{
					error:false,
					message:'',
				}
			}))
		} else {
			setErrors((prevErrors) =>( {
				...prevErrors, name:{
					error: true,
					message: 'Deben ser al menos 3 caracteres',
				}
			}))
		}
	};

	function validarApellido(apellido) {
		if (apellido.length >= 4) {
		  setErrors((prevErrors) => ({
			...prevErrors,
			lastName: {
			  error: false,
			  message: "",
			},
		  }));
		} else {
		setErrors((prevErrors) => ({
			...prevErrors,lastName:{
				error:true,
				message: "Deben ser al menos 4 caracteres",
			}
		}))
		}
	  }

	  function validarEmail(email){
		if (email.length >= 5 && email.includes("@")){
			setErrors((prevErrors) => ({
				...prevErrors,
				email: {
				  error: false,
				  message: "",
				},
			  }));
		}else{
			setErrors((prevErrors) => ({
				...prevErrors,
				email: {
				  error: true,
				  message: "El formato no es valido.",
				},
			  }));
		}
	  }


	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit({
					name,
					lastName,
					email,
					prom,
					nov,
				})
			}}
		>
			<TextField
				id="name"
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) =>
					setName(e.target.value)
				}
				value={name}
				onBlur={(e) => {
					validarNombre(name)
				}}
				error={errors.name.error} 

				helperText={
					errors.name.error
						? errors.name.message
						: ""
						
				}
				 
			
			/>
			<TextField
				id="lastName"
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="normal"
				value={lastName}
				onChange={(e) =>
					setLastName(e.target.value)
				}
				onBlur={(e) => {
					validarApellido(lastName)
					console.log("lastName Blur :   ", errors)
				}}
				error={errors.lastName.error}
				helperText={
					errors.lastName.error
						? errors.lastName.message
						: ""
				}
			/>
			<TextField
				id="email"
				label="Email"
				variant="outlined"
				fullWidth
				margin="normal"
				value={email}
				onChange={(e) =>
					setEmail(e.target.value)
				}
				onBlur={(e) =>{
					validarEmail(email)
				}}
				error={errors.email.error}
				helperText={
					errors.email ? errors.email.message : ""
				}
			/>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={prom}
							onChange={(e) =>
								setProm(
									e.target.checked
								)
							}
						/>
					}
					label="Promociones"
				/>

				<FormControlLabel
					control={
						<Switch
							checked={nov}
							onChange={(e) =>
								setNov(e.target.checked)
							}
						/>
					}
					label="Novedades"
				/>
			</FormGroup>
			<Button
				variant="contained"
				type="submit"
			>
				Registrarse
			</Button>
		</form>
	)
}

function CrearHook() {
	const [a, setA] = useState("a")
	return <></>
}

export default FormSignUp
