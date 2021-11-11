
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
            {answerText: ' Si ', goto: 0}, /** */
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
            answerOptions: [],
        },
        {
            //5
            questionText: 'Puede estar sufiendo dismitia',
            answerOptions: [],
        },
        {
            //6
            questionText: 'Sufre depresion',
            answerOptions: [],
        },
        {
            //7
            questionText: 'Esta sufriendo depresion mayor',
            answerOptions: [],
        },

        {
            //8
            questionText: 'Posible dismitia',
            answerOptions: [],
        },

        {
            //9
            questionText: 'Puede estar sufiendo depresion por su padecimiento fisico',
            answerOptions: [],
        },

        /* Basandonos en el esquematico se iniciara de arriba hacia abajo con las opciones (Preguntas) */

        {
            //10 
            questionText: ' Te sientes irrritado la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 0 },  /** */
                {answerText:'No ', goto: 11 },
            ],
            
        },

        {
            //11 
            questionText: ' Te volviste menos activo en tus actividades diarias?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 0 }, /** */
                {answerText:'No ', goto: 12 },
            ],
            
        },

        {
            //12 
            questionText: ' Haz sentido odio a ti mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 0 }, /** */ 
                {answerText:'No ', goto: 13 },
            ],
            
        },

        {
            //13 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 0 }, /** */ 
                {answerText:'No ', goto: 4 }, //END
            ],
            
        },


];