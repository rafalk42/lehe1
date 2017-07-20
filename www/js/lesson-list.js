var el = React.createElement;

class LessonList extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  onLessonClick(id)
  {
    this.props.onLessonSelect(id);
  }

  render()
  {
    var list = el("p", null, "No lessons available");
    if (this.props.lessonList != undefined)
    {
      if (this.props.lessonList.length > 0)
      {
        var that = this;
        list = this.props.lessonList.map(function(lesson)
        {
          return el(
            "li",
            {
              key: lesson.id + 666,
              onClick: that.onLessonClick.bind(that, lesson.id)
            },
            
              lesson.title);
            
        });
      }
    }
    return el(
      "ul",
      null,
      list
      );
  }
};
