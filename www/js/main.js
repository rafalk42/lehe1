var el = React.createElement;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                lessonList: [],
                lessonSelected: null
            };

        this.updateLessonList = this.updateLessonList.bind(this);
        this.onLessonSelect = this.onLessonSelect.bind(this);
        this.lessonSelect = this.lessonSelect.bind(this);
        this.lessonSelectNone = this.lessonSelectNone.bind(this);
    }

    componentDidMount() {
        getLessonList(this.updateLessonList);
    }

    updateLessonList(lessonList) {
        var prevState = this.state;
        prevState.lessonList = lessonList;
        this.setState(prevState);
    }

    onLessonSelect(id) {
        // this.lessonSelect(id);
        getLesson(id, this.lessonSelect);
    }

    lessonSelect(lesson) {
        var prevState = this.state;
        prevState.lessonSelected = lesson;
        this.setState(prevState);
    };

    lessonSelectNone() {
        var prevState = this.state;
        prevState.lessonSelected = null;
        this.setState(prevState);
    }

    render() {
        var body;
        if (this.state.lessonSelected !== null) {
            var lesson = this.state.lessonSelected;
            body = el(
                Lesson,
                {
                    lesson: lesson
                },
                null
            );
        }
        else {
            body = el(
                LessonList,
                {
                    lessonList: this.state.lessonList,
                    onLessonSelect: this.onLessonSelect
                },
                null
            );
        }

        return el(
            "div",
            null,
            el(
                "a",
                {
                    className: "link",
                    onClick: this.lessonSelectNone
                },
                "MAIN MENU"
            ),
            body
        );
    }
}


ReactDOM.render(
    el(Main, null, null),
    document.getElementById("container")
);
