
export const itemsFormCheckout = [
    {
        id: 1,
        element:'input',
        name: "nombrecompleto",
        type: "text",
        placeholder: "",
        errorMessage:"El campo no puede estar vacio y minimo debe contener 3 letras",
        label: "Nombre Completo",
        pattern: "^[A-Za-z]{3,100}$",
        required: true,
      },
      {
        id: 2,
        element:'input',
        name: "telefono",
        type: "tel",
        placeholder: "(57)3002654565",
        errorMessage:"El campo debe de contener minimo un valor. indicativo + numero de teléfono",
        label: "Teléfono",
        pattern: "^[0-9]{2}[0-9]{10}$",
        required: true,
      },
      {
        id: 3,
        element:'input',
        name: "correo",
        type: "email",
        placeholder: "Ej: info@merkopolis.com",
        errorMessage:"El campo debe de contener un correo valido",
        label: "Correo Electronico",
        pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
        required: true,
      },
      {
        id: 4,
        element:'input',
        name: "direccion",
        type: "text",
        placeholder: "Ej: info@merkopolis.com",
        errorMessage:"El campo debe de contener una direccion valida",
        label: "Dirección",
        required: true,
      },
      {
        id: 5,
        element:'select',
        name: "mediospago",
        errorMessage:"Se debe seleccionar algo de la lista",
        label: "Medios de pago",
        option: [{
                    value:"efectivo",
                    description:"Efectivo"
                },
                {
                    value:"datáfono",
                    description:"Datáfono"
                },
                {
                    value:"transferencia",
                    description:"Transferencia"
                }],
        required: true,
      },

]