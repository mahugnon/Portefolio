const sectionList = document.querySelectorAll('section');
const navigationList = document.querySelectorAll('header nav ul li a');

document.addEventListener('scroll', () => {
    let current = '';
    sectionList.forEach(each => {
        const sectionTop = each.offsetTop;
        const sectionBottom = each.clientHeight + sectionTop;

        if (scrollY >= (sectionTop * 0.8)) {
            current = each.getAttribute('id');
        }
    });
    navigationList.
    forEach(li => {
        li.classList.remove('active');

        if (li.classList.contains(current)) {

            li.classList.add('active');
        }
    });
})