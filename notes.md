```
<body>
    <div id="app">
        <script type="text/babel">
            ReactDOM.render(
            <h1>Hello React</h1>, document.getElementById('app') );
        </script>
    </div>
</body>
```

render this (Hello React h1), in this location (app div)


extracted into own file:
@ public/app.jsx
```
ReactDOM.render(
<h1>Hello React</h1>, document.getElementById('app') );
```

@ index.html
```
<body>
    <div id="app">
        <script type="text/babel" src="app.jsx"></script>
    </div>
</body>
```
