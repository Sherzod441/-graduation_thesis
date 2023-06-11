<template>
  <div>
    <!-- accardion -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Sonli turlar
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  Butun sonlar (integers): Python-da butun sonlar, musbat va manfiy
                  qiymatlarga ega bo'lishi mumkin. Masalan, 5, -3, 0, 100 va hokazo.
                  Haqiqiy sonlar (floats): Haqiqiy sonlar (o'nliklar) ko'p xonali sanoqlar
                  va desyatliklar (kichik to'plamlar) bilan ifodalangan. Misol uchun,
                  3.14, -0.5, 2.71828 va hokazo. Murakkab sonlar (complex): Murakkab
                  sonlar, haqiqiy va imkoniy sonlardan iborat bo'lishi mumkin. Bunday
                  sonlar "a + bj" formatida ifodalangan, a haqiqiy qism, b esa imkoniy
                  qismni ifodalaydi. Misol uchun, 2 + 3j, -1 + 0.5j va hokazo.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Satrli turlar
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  Python dasturlash tilida satriy tiplar, ya'ni matnlar bilan ishlash
                  uchun foydalaniladigan ma'lumotlardir. Matnlar Python-da "string" deb
                  ataladi. String tiplari, matnlarni ifodalash va ularga amallar bajarish
                  uchun ishlatiladi. Python-da matnlar ikki xil usulda ifodalay oladi:
                  qo'shtirnoq (') yoki tirnoq (") belgilari orqali. Misol uchun, "Salom,
                  dunyo!" yoki 'Python ni o'rganishning eng yaxshi yo'li bu emasmi?'
                  Satriy tiplar bir nechta xususiyatlarga ega: Indekslash: Matnning har
                  bir belgisi indeks (o'rindi) orqali aylanadi. Indekslar 0 dan
                  boshlanadi. Masalan, "salom" so'zida 's' belgisi indeks 0 ga, 'a'
                  belgisi indeks 1 ga va hokazo mos keladi. Matning oxirgi belgisi indeksi
                  esa (uzunligi-1) ga teng bo'ladi. So'zlarni qo'shish: Python tilida
                  matnlarni qo'shish uchun + operatoridan foydalaniladi. Misol uchun,
                  "Salom" + ", dunyo!" ifodasi "Salom, dunyo!" matnini beradi.
                  Ko'paytirish: Matnlarni bir nechta marta ko'paytirish uchun *
                  operatoridan foydalaniladi. Misol uchun, "Python" * 3 ifodasi
                  "PythonPythonPython" matnini beradi. Indeks orqali belgilarga murojaat:
                  Matndagi belgilarga indeks orqali murojaat qilish mumkin. Misol uchun,
                  "Salom"[0] ifodasi 'S' belgisini beradi. Slicing (kesish): Matnning bir
                  qismini olish uchun slicing, ya'ni kesish operatoridan foydalaniladi.
                  Slicing sintaksisi [start:end] formatidadir. Misol uchun, "Salom"[1:4]
                  ifodasi 'alo' matnini beradi. Matn uzunligi: Matndagi belgilar sonini
                  olish uchun len() funktsiyasidan foydalaniladi. Misol uchun,
                  len("Salom") ifodasi 5 ni beradi. Python-da satriy tiplari odatda
                  matnlarni tahrirlash, qatorlarda ma'lumotlarni saqlash, fayllarda
                  ishlash va boshqa amallar uchun ishlatiladi.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Mantiqiy Turlar
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    Python dasturlash tilida boolean tiplar, ya'ni mantiqiy qiymatlar (True va False) bilan ishlash uchun foydalaniladigan ma'lumotlardir. Boolean tiplar mantiqiy operatsiyalarda, shartlarda, shart operatorlarida va shartlarga bog'liq amallarni bajarishda keng qo'llaniladi.

Python tilida boolean tiplar quyidagi xususiyatlarga ega: <br>

True: Bu qiymat mantiqiy to'g'ri ifodalangan va "ha" yoki "to'g'ri" deb ta'riflanadi.<br>

False: Bu qiymat mantiqiy noto'g'ri ifodalangan va "yo'q" yoki "noto'g'ri" deb ta'riflanadi. <br>

Boolean tiplar bilan amal bajarish uchun quyidagi amallardan foydalaniladi:

Mantiqiy operatorlar: Mantiqiy tiplar orasida mantiqiy operatorlar bilan amal bajarish mumkin. Bu operatorlar quyidagilardir:<br>
and: va sharti, ikkala ifodaning ham True bo'lishi shartiga bog'liq.<br>
or: yoki sharti, ikkala ifodaning biri ham True bo'lishi shartiga bog'liq.<br>
not: bo'lmagan sharti, ifodaning qiymatini teskari holatga o'tkazadi.<br>
Shart operatorlari: Boolean tiplarni belgilash va shartlarni tekshirish uchun shart operatorlari ishlatiladi. Shart operatorlari quyidagilardan iboratdir:<br>

==: tenglikni tekshirish. <br>
!=: teng emasligini tekshirish. <br>
{{ '<:' }} kichiklikni tekshirish. <br>
{{ '>:' }} kattalikni tekshirish. <br>
 {{ '<=:' }} kichik yoki tenglikni tekshirish. <br>
{{ '>=:' }} katta yoki tenglikni tekshirish. <br>
Shart operatorlari bilan shartlarni belgilash: Boolean tiplarni shartlar bilan birga ishlatib, ifodalarni amalga oshirish uchun shart operatorlari bilan shartlar belgilanadi. Bunda quyidagi operatorlardan foydalaniladi:<br>

if: agar shart bajarilsa, shartni tekshiradi. <br>
else: agar shart bajarilmasa, else blokida ifoda ishlatiladi. <br>
elif: boshqa shartlar tekshiriladi.<br>
Boolean tiplar bilan ishlash, dasturlarda shartlarni tekshirish, mantiqiy qiymatlar orqali amallar bajarish va dasturlarni boshqarishda juda muhimdir. Boolean tiplar, dasturlarni mantiqiy to'g'ri yoki noto'g'ri bo'lgan holatlarda to'g'ri ishlashini ta'minlayadi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- accardion -->
    <!-- Blog -->
    <div id="blog" class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- main blog -->
          <div id="main" class="col-md-12">
            <h2 class="mb-5">Python dasturlash tilini o'rganish uchun kerak bo'ladigan video darsliklar</h2>
            <!-- row -->
            <div class="row">
              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TfXfBPO4wug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <h4>
                    O'zgaruvchilar va operatorlar | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">Code uz</a></span>
                  </div>
                </div>
              </div>
              <!-- /single blog -->

              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cvbmwI5RBNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <h4>
                    Ma'lumotlar tiplari | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">Code uz</a></span>
                  </div>
                </div>
              </div>
              <!-- /single blog -->

              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/d96EvP4F6LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <h4>
                    Ma'lumotlar tiplari (davomi) | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">Code uz</a></span>
                    
                  </div>
                </div>
              </div>
              <!-- /single blog -->

              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oyd9bGF8Q7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <h4>
                    Ma'lumotar tiplari (davomi) | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">Code uz</a></span>
                  </div>
                </div>
              </div>
              <!-- /single blog -->

              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K532yzx94pY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                  </div>
                  <h4>
                    Ma'lumotlar tiplari (yakuniy) | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">John Doe</a></span>
                    <div class="pull-right">
                      <span>18 Oct, 2017</span>
                      <span class="blog-meta-comments"
                        ><a href="#"><i class="fa fa-comments"></i> 35</a></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- /single blog -->

              <!-- single blog -->
              <div class="col-md-6">
                <div class="single-blog">
                  <div class="blog-img">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/evTa5bQ393A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <h4>
                    Shart operatorlari (if-else) | Python dasturlash tili
                  </h4>
                  <div class="blog-meta">
                    <span class="blog-meta-author">By: <a href="#">Code uz</a></span>
                  </div>
                </div>
              </div>
              <!-- /single blog -->
            </div>
            <!-- /row -->
          </div>
          <!-- /main blog -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- /Blog -->
     <!-- container -->
     <div class="container">
        <!-- row -->
        <div class="row">
          <div class="text-center">
            <a class="main-button icon-button" target="_blank" href="https://www.youtube.com/watch?v=73WtJpt_4gA&list=PLPCDJXWqKXKEYN2Ke6v79YmDs9K3YK27v&">Ko'proq darsliklar</a>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/FooterComponent.vue'
export default {
    components :
        {
            Footer
        }
};
</script>

<style scoped>
@import url(../assets/style/first.css);
</style>
