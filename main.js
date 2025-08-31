// Handle initial load
if (window.location.hash) {
    const hash = decodeURIComponent(window.location.hash.substring(1));
    showBlog(hash);
}

window.addEventListener('hashchange', function() {
    const hash = decodeURIComponent(window.location.hash.substring(1));
    if (hash) {
        showBlog(hash);
    } else {
        showHome();
    }
});

function showBlog(courseName) {
    // Hide all blog posts
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => post.classList.remove('active'));
    
    // Hide welcome message
    const welcome = document.querySelector('.welcome');
    if (welcome) welcome.style.display = 'none';
    
    // Show all posts for this course
    const courseClass = courseName.toLowerCase().replace(/ /g, '-').replace(/:/g, '');
    const coursePosts = document.querySelectorAll(`.blog-post.${courseClass}`);
    coursePosts.forEach(post => post.classList.add('active'));
}

function showHome() {
    // Hide all blog posts
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => post.classList.remove('active'));
    
    // Show welcome message
    const welcome = document.querySelector('.welcome');
    if (welcome) welcome.style.display = 'block';
    
}
