
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
            {answerText: ' Si ', goto: 18}, /** */
            {answerText:'No ', goto: 10}, /** */
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
                {answerText:'No ', goto: 19 }, 
            ],
            
        },

        {
            //18
            questionText: ' Haz tenido ataques subitos de ira?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 17 }, 
                {answerText:'No ', goto: 11 },
            ],
            
        },

        {
            //19
            questionText: ' Haz sentido odio a ti mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 20 }, 
                {answerText:'No ', goto: 13 }, 
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

        {
            //25 -> 
            questionText: ' Haz sentido odio a ti mismo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 26 }, 
                {answerText:'No ', goto: 13 }, 
            ],
            
        },

        {
            //26 
            questionText: ' Tienes dificultad para concentrarte?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 5 }, 
            ],
            
        },

     
        {
            //27 
            questionText: ' Te haz mudado de tu casa?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 30 }, 
                {answerText:'No ', goto: 29 }, 
            ],
            
        },

        {
            //28 
            questionText: ' Te trasladaron a un centro de adultos mayores?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 32 }, 
                {answerText:'No ', goto: 31 }, 
            ],
            
        },

        {
            //29 
            questionText: ' Sufres dolores de cuerpo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 34 }, 
                {answerText:'No ', goto: 33 }, 
            ],
            
        },

        {
            //30 
            questionText: ' Tienes dolores croncicos?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 35 }, 
                {answerText:'No ', goto: 35 }, 
            ],
            
        },

        {
            //31 
            questionText: ' Tienes mucho dolor en tu cuerpo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 38 }, 
                {answerText:'No ', goto: 37 }, 
            ],
            
        },

        {
            //32
            questionText: ' Padeces dolores cronicos que te inmovilizan?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 40 }, 
                {answerText:'No ', goto: 39 }, 
            ],
            
        },

        {
            //33 
            questionText: ' Haz dejado de hacer actividades que te gustaban?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 42 }, 
                {answerText:'No ', goto: 41 }, 
            ],
            
        },

        {
            //34 
            questionText: ' Haz perdido la independencia de tu cuerpo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 44 }, 
                {answerText:'No ', goto: 43 }, 
            ],
            
        },

        {
            //35 
            questionText: ' Tienes problemas de soledad?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 46 }, 
                {answerText:'No ', goto: 45 }, 
            ],
            
        },

        {
            //36 
            questionText: ' Tus seres queridos se han empezado a morir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 48 }, 
                {answerText:'No ', goto: 47 }, 
            ],
            
        },

        {
            //37
            questionText: ' Haz dejado de hacer actividades que te gustan?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 50 }, 
                {answerText:'No ', goto: 49 }, 
            ],
            
        },

        {
            //38 
            questionText: ' Haz perdido la independencia de tu cuerpo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 52 }, 
                {answerText:'No ', goto: 51 }, 
            ],
            
        },

        {
            //39 
            questionText: ' Tienes problemas con estar solo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 54 }, 
                {answerText:'No ', goto: 53 }, 
            ],
            
        },

        {
            //40
            questionText: ' Tus seres queridos se han empezado a morir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 56 }, 
                {answerText:'No ', goto: 55 }, 
            ],
            
        },

        {
            //41 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //42 
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 8 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //43 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //44 
            questionText: '  Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //45 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //46 
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 5 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //47 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 5 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //48
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 6 }, 
            ],
            
        },

        {
            //49
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //50
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //51 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 8 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //52 
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 8 }, 
            ],
            
        },

        {
            //53 
            questionText: 'Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 4 }, 
                {answerText:'No ', goto: 4 }, 
            ],
            
        },

        {
            //54 
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 6 }, 
            ],
            
        },

        {
            //55 
            questionText: ' Sufres problemas para dormir?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 6 }, 
                {answerText:'No ', goto: 6 }, 
            ],
            
        },

        {
            //56 
            questionText: ' Sientes fatiga la mayor parte del tiempo?' ,
            answerOptions: [
                {answerText: ' Si ', goto: 7 }, 
                {answerText:'No ', goto: 7 }, 
            ],
            
        },

];