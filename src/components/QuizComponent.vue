<template>
  <div class="d-flex justify-content-center">
      
    <div v-if="showScore">
        <b-card 
        title="Results"
        style="max-width: 20rem;magrin-top:4rem; color:#374050;"
        >
       <h3 class="mb-4"> Siz <span class="text-success">{{questions.length}}</span> ta savoldan <span class="text-danger">{{score}}</span> tasiga to'g'ri javob berdingiz</h3> 
       <h3 v-if="score == 8">Barakalla siz hamma savolga to'g'ri javob berdingiz</h3>
       <h3 v-else>Xatolaringiz ustida ishlab, yana urinib ko'ring <br> <br>
        <button @click="Back()" class="main-button"> Darslarga qaytish</button>
       </h3> 
        </b-card>
    </div>
    <div class="card-q" v-else>
    <span v-if="!startQuiz">
         <card
         img-src="about.png"
    img-alt="Image"
    img-top
    title="Simple Quiz Application"
    style="max-width: 20rem;"
    class="mb-2"
        >
        
        <br>
      <button class="main-button icon-button" @click="startQuizFunc()">Sinov testini boshlash</button>
    </card>
    </span>
    <span v-else>
    <card
    title="Simple Quiz Application"
    style="max-width: 20rem;"
    class="mb-2"
  
  >
   <card-text>
      <h3> Savol {{currentQuestion + 1}} jami savollar soni {{questions.length}} ta </h3>
    </card-text>
    <br>
   <progress
        variant="warning"
        :max="30"
        :value="countDown"
        height="10px"
      ></progress>
  
     <card-text>
      <span class="ms-4" style="font-size: 25px;"><strong>{{countDown}} </strong></span> <br> <br>
    </card-text>
    <h3 class="mb-3">
      {{questions[currentQuestion].questionText}}
    </h3>
    <div class="answer-section">
    <button :key="index" v-for="(option, index) in questions[currentQuestion].answerOptions" @click="handleAnswerClick(option.isCorrect)" class="answer-button  mb-3" variant="primary">{{option.answerText}}</button>
    </div>
  </card>
    </span>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentQuestion: 0,
            showScore: false,
            score:0,
            countDown : 30,
            timer:null,
            startQuiz: false,

            questions : [
		{
			questionText: "Shu tiplardan qaysi biri butun sonlar uchun ishlatiladi ?",
			answerOptions: [
				{ answerText: 'string', isCorrect: false },
        { answerText: 'float', isCorrect: false },
				{ answerText: 'int', isCorrect: true },
				{ answerText: 'boolean', isCorrect: false },
                
			
			],
		},
		{
			questionText: "Shu tiplardan qaysi biri haqiqiy sonlar uchun ishlatiladi ?",
			answerOptions: [
				{ answerText: 'String', isCorrect: false },
				{ answerText: 'float', isCorrect: true },
				{ answerText: 'int', isCorrect: false },
				{ answerText: 'boolean', isCorrect: false },
			],
		},
		{
			questionText: 'boolean faqat True yoki False qiymatga ega ',
			answerOptions: [
				{ answerText: 'Rost', isCorrect: true },
				{ answerText: "Yolg'on", isCorrect: false },
			],
		},
		{
			questionText: 'Shu tiplardan qaysi biri satrlar uchun ishlatiladi ?',
			answerOptions: [
				{ answerText: 'string', isCorrect: true },
				{ answerText: 'float', isCorrect: false },
				{ answerText: 'int', isCorrect: false },
				{ answerText: 'boolean', isCorrect: false },
			],
        },
        {
			questionText: "String tipi orqali satrni satrga qo'shsa bo'ladi",
			answerOptions: [
				{ answerText: 'Rost', isCorrect: true },
				{ answerText: "Yolg'on", isCorrect: false },
			],
        },
        {
			questionText: "String tipi orqali satrni satrga ko'paytirsa bo'ladi",
			answerOptions: [
				{ answerText: 'Rost', isCorrect: true },
				{ answerText: "Yolg'on", isCorrect: false },
			],
        },
        {
			questionText: 'Boolean tiplar bilan amal bajarish uchun quyidagi amallardan foydalaniladi:  ',
			answerOptions: [
				{ answerText: "faqatgina boolean amal bilan ishlashdan", isCorrect: false },
				{ answerText: "sonlarni bir biriga qo'shish", isCorrect: false },
				{ answerText: "stringni string ga qo'shish", isCorrect: false },
				{ answerText: 'Mantiqiy tiplar orasida mantiqiy operatorlar bilan amal bajarish', isCorrect: true },
			],
        },
        {
			questionText: 'va amalini qod orqali qanday yoziladi ',
			answerOptions: [
				{ answerText: '||', isCorrect: false },
				{ answerText: '&&', isCorrect: true },
				{ answerText: '!=', isCorrect: false },
				{ answerText: '< yoki > ', isCorrect: false },
			],
		},
    ],
    

        }
    },

    methods:{
        startQuizFunc(){
            this.startQuiz = true
            this.countDownTimer()
        },
        handleAnswerClick(isCorrect){
            clearTimeout(this.timer);
            let nextQuestion = this.currentQuestion + 1;
            if(isCorrect){
                this.score = this.score + 1;
            }
            if(nextQuestion < this.questions.length){
            this.currentQuestion = nextQuestion;
            // this.$store.state.questionAttended = this.currentQuestion;
            // localStorage.setItem('qattended', this.currentQuestion)

            this.countDown = 30;
            this.countDownTimer();
            }
            else{
                // localStorage.removeItem('qattended')
                this.showScore = true;
                // localStorage.setItem('testComplete',this.showScore)
            }

        },
        countDownTimer() {
                if(this.countDown > 0) {
                    this.timer = setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
                else{
                    this.handleAnswerClick(false)
                }
            },
            Back(){
                 this.$router.push('/lessons'); 
            }
    },


    
}
</script>

<style scoped>
.card{
    min-width: 100%;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
}
.card-q{
    min-width: 60%;
}

.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}


/* --- Buttons --- */
.main-button {
position:relative;
display:inline-block;
padding:10px 30px;
background-color: #FF6700;
border: 2px solid transparent;
border-radius: 40px;
color: #FFF;
-webkit-transition:0.2s all;
transition:0.2s all;
}

.main-button:hover , .main-button:focus {
background-color:#fff;
border: 2px solid #FF6700;
color:#FF6700;
}

.main-button.icon-button:hover , .main-button.icon-button:focus {
padding-right: 45px;
}

.main-button.icon-button:after {
content:"\f178";
font-family:FontAwesome;
position:absolute;
width: 30px;
right: 15px;
text-align:center;
opacity:0;
-webkit-transition:0.2s all;
transition:0.2s all;
}

.main-button.icon-button:hover:after , .main-button.icon-button:focus:after {
opacity:1;
}
.answer-button{
  position:relative;
display:inline-block;
padding:10px 30px;
background-color: #FF6700;
border: 2px solid transparent;
border-radius: 40px;
color: #FFF;
-webkit-transition:0.2s all;
transition:0.2s all;
}
</style>
