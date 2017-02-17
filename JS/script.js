var App = React.createClass({
    render: function(){
        var items = ['Home',
            'About',
            'Service', 
            'Profolio',
            'Contact-US']
        return React.createElement('div',
            null,
            items.map(function(v, i){
                return React.createElement('div', {key: i}, React.createElement(link,{label: v})
                )
            })
        )
    }
})

var link = React.createClass({
    render: function(){
        var url='/'
        + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ','-')
    return React.createElement('div', {
        style: {
            margin: '20px',
            fontSize: '20px',
        }
    }, 
        React.createElement('a', {href: url}, this.props.label),
        React.createElement('br')
    )
    }
})
ReactDOM.render(
    React.createElement(
        App,
        null
    ),
    document.getElementById('app')
)