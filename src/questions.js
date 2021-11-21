
export const questions = [
    {
        questionText: ' En que grupo de edad te encuentras?',
        answerOptions: [
            {answerText: ' Adulto ', goto: 1 },
            {answerText:'Adolescente ', goto: 2 },
            {answerText:'Adulto Mayor', goto: 3 },
        ],
    },
        /* Opciones iniciales del esquematico de arriba hacia abajo */
    {
        //1 
        questionText: ' Haz tenido sentimientos de tristeza con melancolia?' ,
        answerOptions: [
            {answerText: ' Si ', goto: 18}, 
            {answerText:'No ', goto: 10 },
        ],
        
    },
    {
        //2
        questionText: 'Te sientes sensible a la critica?',
        answerOptions: [
            {answerText: ' Si ', goto: 0}, /** */
            {answerText:'No ', goto: 0}, /** */
        ],
    },
    {
        //3
        questionText: 'Sufres algun padecimiento fisico?',
        answerOptions: [
            {answerText: ' Si ', goto: 0}, /** */
            {answerText:'No ', goto: 0 }, /** */
        ],      
    },
        /* Basandonos en el esquematico se iniciara de arriba hacia abajo con las opciones (RESULTADOS) */
  
        {
            //4
            questionText: 'No sufre depresion',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },
        {
            //5
            questionText: 'Puede estar sufiendo dismitia',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },
        {
            //6
            questionText: 'Sufre depresion',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },
        {
            //7
            questionText: 'Esta sufriendo depresion mayor',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },

        {
            //8
            questionText: 'Posible dismitia',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },

        {
            //9
            questionText: 'Puede estar sufiendo depresion por su padecimiento fisico',
            answerOptions: [
                {answerText: ' Regresar a Inicio ', goto: 0 },
            ],
        },

        /* Basandonos en el esquematico se iniciara de arriba hacia abajo con las opciones (Preguntas) */

        {
            //10 
            questionText: ' Te sientes irrritado la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 17 },
                {answerText:'No ', goto: 11 },
            ],
            
        },

        {
            //11 
            questionText: ' Te volviste menos activo en tus actividades diarias?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 15 }, 
                {answerText:'No ', goto: 12 },
            ],
            
        },

        {
            //12 
            questionText: ' Haz sentido odio a ti mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 14 },
                {answerText:'No ', goto: 13 },
            ],
            
        },

        {
            //13   -> NSD  && -> NDP
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //14   -> NSD  && -> NDP
            questionText: ' Tienes difucltad para concentrarte?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 },
            ],
            
        },

        {
            //15
            questionText: ' Sientes culpa excesiva contigo mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 24 },
                {answerText:'No ', goto: 23 }, 
            ],
            
        },

        {
            //16   -> NSD  && -> PSD
            questionText: ' Cuentas con dificultad para concentrarte?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 13 }, 
                {answerText:'No ', goto: 5 },
            ],
            
        },

        {
            //17
            questionText: ' Dejaste de disfrutar hacer tus actividades que te hacian feliz?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 15 }, 
                {answerText:'No ', goto: 12 }, 
            ],
            
        },

        {
            //18
            questionText: ' Haz tenido ataques subitos de ira?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 17 }, 
                {answerText:'No ', goto: 16 },
            ],
            
        },

        {
            //19
            questionText: ' Haz sentido odio a ti mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 13 }, 
                {answerText:'No ', goto: 20 }, 
            ],
            
        },

        {
            //20
            questionText: ' Haz tenido dificultad para concentrarte?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 5 }, 
                {answerText:'No ', goto: 6 }, 
            ],
            
        },

        {
            //21
            questionText: ' Dejaste de disfrutar hacer tus actividades que te hacian feliz?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 13 }, 
                {answerText:'No ', goto: 22 },  
            ],
            
        },

        {
            //22
            questionText: ' Sientes culpa excesiva contigo mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 5 }, 
                {answerText:'No ', goto: 24 }, 
            ],
            
        },

        {
            //23 -> SD && -> SD
            questionText: ' Tienes problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 6 }, 
            ],
            
        },

        {
            //24 -> SDM && -> SDM
            questionText: ' Tienes dificultad para concentrarte?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 7 }, 
                {answerText:'No ', goto: 7 }, 
            ],
            
        },

     


];