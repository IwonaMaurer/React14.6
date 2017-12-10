var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },


      getDefaultProps: function () {
        console.log('getDefaultProps');
    
        return {};
      },
      componentWillMount: function () {
        console.log('componentWillMount');
      },
    
      componentDidMount: function () {
        console.log('componentDidMount');
      },
    
      componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
      },
    
      shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate');
    
        return true;
      },
    
      componentWillUpdate: function () {
        console.log('componentWillUpdate');
      },
    
      componentDidUpdate: function () {
        console.log('componentDidUpdate');
      },
    
      componentWillUnmount: function () {
        console.log('componentWillUnmount');
      },
    

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function(){
        this.setState({
          counter: this.state.counter - 1
        });
      },
   
      render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment},'+'),
            React.createElement('button', {onClick: this.decrement},'-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


  