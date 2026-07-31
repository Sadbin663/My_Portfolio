document.getElementById("navbar").innerHTML = `

<header class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

<div class="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

<div class="flex items-center gap-3">

<div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
TS
</div>


</div>

<nav class="hidden md:flex items-center gap-10">

<a href="index.html"
class="hover:text-indigo-400 duration-300">
Home
</a>

<a href="about.html"
class="hover:text-indigo-400 duration-300">
About
</a>

<a href="contact.html"
class="hover:text-indigo-400 duration-300">
Contact
</a>

</nav>

<div class="flex items-center gap-4">

<button id="theme-toggle"
class="glass px-4 py-2 rounded-full hover:scale-105 duration-300">

🌙

</button>

<a href="assets/rsm.pdf"
   download="rsm.pdf"
   class="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-full">
   Download CV
</a>

</div>

</div>

</header>

`;