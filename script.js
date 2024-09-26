const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const line2 = document.querySelector('.line2')
const line1 = document.querySelector('.line1')
const line3 = document.querySelector('.line3')
const click = document .querySelectorAll('.click')
const body = document.querySelector('body')
const form = document.querySelector('form')
const active = document.querySelectorAll('.clicked')
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    body.classList.toggle('overflowY_hidden')
    line2.classList.toggle('line_2_rotate')
    line3.classList.toggle('line_3_rotate')
    line1.classList.toggle('remove')
});
click.forEach(it=>{
    it.addEventListener('click',(e)=>{
        click.forEach(it=>it.classList.remove('act'))
        e.target.classList = 'act'
    })
})
click.forEach((click)=>{
    click.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        // body.classList.toggle('overflowY_hidden')
        line2.classList.toggle('line_2_rotate')
        line3.classList.toggle('line_3_rotate')
        line1.classList.toggle('remove')
    })
    
   
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    alert("Response Recived Thank you")
    form.reset()
})


active.forEach(act=>{
    act.addEventListener('click',(e)=>{
        active.forEach((it=>it.classList.remove("act")))
        act.classList.add("act")
    })
})