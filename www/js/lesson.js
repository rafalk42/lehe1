/**
 * Created by rafalk42 on 2017-07-25.
 */
var el = React.createElement;

class Lesson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var lesson = this.props.lesson;
        console.log(this.props.lesson);
        return el(
            "h1",
            null,
            "Lesson: " + lesson.title + " [" + lesson.id + "]"
        );
    }
}