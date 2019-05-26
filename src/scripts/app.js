import Framework7 from 'framework7';

export default function init() {
    var app = new Framework7({
        // App root element
        root: '#app',
        // App Name
        name: 'My App',
        // App id
        id: 'com.myapp.test',
        // Enable swipe panel
        panel: {
            swipe: 'left',
        },
        // Add default routes
        routes: [
            {
                path: '/',
                url: './public/pages/home.html',
            },
            {
                path: '/about/',
                url: './public/pages/about.html',
            },
            {
                path: '/other/',
                url: './public/pages/other.html',
            },
        ],
        // ... other parameters
    });

      
    var mainView = app.views.create('.view-main');
}