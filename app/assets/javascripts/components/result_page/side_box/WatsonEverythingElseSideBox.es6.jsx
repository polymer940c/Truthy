class WatsonEverythingElseSideBox extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <Watson data={this.props.data}/> )
  }

  render(){
    return (
      <div className="hovereffect2 sidebar1">

        <div className="overlay">
          <h4 className="side_box_title text-center">Article Data</h4>
          <p className="about_company">View the sentiment, subjectivity, emotions, and other important data about the article.</p>
          <p className="text-right padding botton_corner"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View Data</a></p>
        </div>

        <i className="img-responsive material-icons orange600">donut_large</i>

      </div>
    )
  }

}
