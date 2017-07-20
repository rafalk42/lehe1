var el = React.createElement;

class Main extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      lessonList: [],
      lessonSelected: null
    };

    this.updateLessonList = this.updateLessonList.bind(this);
    this.onLessonSelect = this.onLessonSelect.bind(this);
  }

  componentDidMount()
  {
    getLessonList(this.updateLessonList);
  }

  updateLessonList(lessonList)
  {
    var prevState = this.state;
    prevState.lessonList = lessonList;
    this.setState(prevState);
  }

  onLessonSelect(id)
  {
    console.log(this);
    console.log(this.lessonSelect);
    this.lessonSelect(id);
  }

  lessonSelect(id)
  {
    var prevState = this.state;
    prevState.lessonSelected = id;
    this.setState(prevState);
  };

  render()
  {
    if (this.state.lessonSelected != null)
    {
      var lessonId = this.state.lessonSelected;
      return el(
          "p",
          null,
          "This is lesson id=" + lessonId
        );
    }
    else
    {
      return el(
        LessonList,
        {
          lessonList: this.state.lessonList,
          onLessonSelect: this.onLessonSelect,
          foo: 123
        },
        null
      );
    }
  }
}


ReactDOM.render(
  el(Main, null, null),
  document.getElementById("container")
);
