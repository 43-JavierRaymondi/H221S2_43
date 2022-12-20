const url = "http://54.164.205.242:3000/api/CLIENTE/";
let resultados = '';
const formArticulo = document.querySelector("form");
const usercli = document.getElementById("USERCLI");
const emauscli = document.getElementById("EMAUSCLI");
const celuscli = document.getElementById("CELUSCLI");
const datuscli = document.getElementById("DATUSCLI");
const msgcli = document.getElementById("MSGCLI");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (USERCLI.value == "" || EMAUSCLI.value == "" || CELUSCLI.value == "" || DATUSCLI.value == "" || MSGCLI.value == "") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            USERCLI: USERCLI.value,
                            EMAUSCLI: EMAUSCLI.value,
                            CELUSCLI: CELUSCLI.value,
                            DATUSCLI: DATUSCLI.value,
                            MSGCLI: MSGCLI.value
                        }
                    )
                }
            )
            .then(
            response => response.json()
            )
            .then(
            response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
}
);