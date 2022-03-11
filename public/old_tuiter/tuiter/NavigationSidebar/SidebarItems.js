export default [
    {fa_classes: 'fab fa-twitter', href: '#', text: ''},
    {
        fa_classes: 'fa-solid fa-house-chimney',
        href: '../HomeScreen/home.html',
        text: 'Home' },
    {fa_classes: 'fab fa-hashtag', href:    '/tuiter/ExploreScreen/explore.html', text: 'Explore'},
    {fa_classes: 'fa-solid fa-bell', href: '/tuiter/notifications.html', text: 'Notifications'},
    {fa_classes: 'fa-solid fa-envelope', href: '/tuiter/messages.html', text: 'Messages'},
    {fa_classes: 'fa-solid fa-bookmark', href: '/tuiter/bookmarks.html', text: 'Bookmarks'},
    {fa_classes: 'fa-solid fa-list', href: '/tuiter/lists.html', text: 'Lists'},
    {fa_classes: 'fa-solid fa-user', href: '/tuiter/user.html', text: 'Profile'},
]
console.log(`loaded module: ${import.meta.url}`)