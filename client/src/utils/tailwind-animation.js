/*
    Searches DOM for "[data-replace]" when page loads and replaces the content with whatever tailwind classes you want to animate
    Use case: data-replace="{ 'replace-this': 'with-this', 'and-replace-this': 'with-this' }"
    Example: data-replace='{ "translate-y-12": "translate-y-0" }'
*/

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var replacers = document.querySelectorAll('[data-replace]');
        for (var i = 0; i < replacers.length; i++) {
            let replaceClasses = JSON.parse(
                replacers[i].dataset.replace.replace(/'/g, '"'),
            );
            Object.keys(replaceClasses).forEach(function (key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 100);
});
