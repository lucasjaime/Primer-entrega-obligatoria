function saludar(user){
    let condition = true
    do{
        let consulta = prompt(`Hola ${user}, desea consultar alguna asistencia`);
        if(consulta.toLowerCase() == 'si'){
            let name = true
            do{
                let participante = prompt('¿Qué nombre desea consultar? Si ya tiene todos los datos necesarios y no quiere volver a consultar, escriba "Ninguno"');
                function Alumnos(nombre, rol, asistencia){
                    this.nombre = nombre,
                    this.rol = rol,
                    this.asistencia = asistencia
                    this.showData = alert(`El/la ${rol} ${nombre} posee ${asistencia}`)
                }
                if(participante.toLowerCase() == 'lucas jaime'){
                    const alumno1 = new Alumnos('Lucas Jaime', 'alumno', 'tres asistencias');
                }else if(participante.toLowerCase()=='ninguno'){
                    alert(`Espero haberte ayudado ${user}, hasta la próxima!!`);
                    name = false
                }else if(participante.toLowerCase() == 'juan cruz atamañuk'){
                    const alumno2 = new Alumnos('Juan Cruz Atamañuk', 'alumno', 'tres asistencias');               
                }else if(participante.toLowerCase() == 'julian oriuela'){
                    const alumno3 = new Alumnos('Julian Oriuela', 'alumno', 'dos asistencias');
                }else if(participante.toLowerCase() == 'laura rios'){
                    const alumno4 = new Alumnos('Laura Rios', 'alumna', 'cuatro asistencias');
                }else if(participante.toLowerCase() == 'leandro regueira'){
                    const alumno5 = new Alumnos('Leandro Regueira', 'alumno', 'tres asistencias');
                }else if(participante.toLowerCase()=='lucy gutierrez'){
                    const alumno6 = new Alumnos('Lucy Gutiérrez', 'alumna', 'dos asistencias');
                }else if(participante.toLowerCase()=='marcos auqui'){
                    const alumno7 = new Alumnos('Marcos Auqui', 'alumno', 'dos asistencias');
                }else if(participante.toLowerCase()=='juan cruz villar'){
                    const alumno8 = new Alumnos('Juan Cruz Villar', 'alumno', 'cuatro asistencias');
                }else if(participante.toLowerCase()=='julian macchia'){
                    const alumno9 = new Alumnos('Julian Macchia', 'alumno', 'cuatro asistencias');
                }else if(participante.toLowerCase()== 'lautaro fernandez'){
                    const alumno10 = new Alumnos('Lautaro Fernandez', 'alumno', 'cuatro asistencias');
                }else if(participante.toLowerCase()== 'liliana riccitelli'){
                    const alumno11 = new Alumnos('Liliana Riccitelli', 'alumna', 'una asistencia');
                }else if(participante.toLowerCase()== 'luciano leone'){
                    const alumno12 = new Alumnos('Luciano Leone', 'alumno', 'tres asistencias');
                }else if(participante.toLowerCase()== 'luis angel anaya diaz'){
                    const alumno13 = new Alumnos('Luis Angel Anaya Diaz', 'alumno', 'dos asistencias');
                }else if(participante.toLowerCase()=='victor vazquez'){
                    const alumno14 = new Alumnos('Victor Vazquez', 'alumno', 'cuatro asistencias');
                }else if(participante.toLowerCase()=='juan gonzales'){
                    const alumno15 = new Alumnos('Juan Gonzales', 'alumno', 'una asistencia');
                }else if(participante.toLowerCase()=='karen salguero'){
                    const alumno16 = new Alumnos('Karen Salguero', 'alumna', 'tres asistencias');
                }else if(participante.toLowerCase()=='leandro quiroga'){
                    const alumno17 = new Alumnos('Leandro Quiroga', 'alumno', 'una asistencia');
                }else if(participante.toLowerCase()=='lucas correa'){
                    const alumno18 = new Alumnos('Lucas Correa', 'alumno', 'dos asistencias');
                }else if(participante.toLowerCase()=='lucio tjunczyk'){
                    const alumno19 = new Alumnos('Lucio Tjunczyk', 'alumno', 'cuatro asistencias');
                }else if(participante.toLowerCase()=='luis maturano'){
                    const alumno20 = new Alumnos('Luis Maturano', 'alumno', 'una asistencia');
                }else if(participante.toLowerCase()=='victoria diani'){
                    const alumno21 = new Alumnos('Victoria Diani', 'alumna', 'cuatro asistencias');
                }else{
                    alert(`Disculpa, pero no conozco al participante mencionado, vuelve a intentarlo`);
                }
            }while(name)
            condition = false
        }else if(consulta.toLowerCase() == 'no'){
            alert(`Que bueno, menos trabajo para mi. Adios ${user}, que tengas buen día!!`)
            condition = false
        }else{
            alert('Debese responder con si o con no')
        }
    }while(condition)
}
saludar(prompt('Ingrese su nombre'));