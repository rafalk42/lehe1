function getLessonList(successCallback) {
    $.ajax(
        {
            type: "GET",
            url: "api/getLessonList.json",
            data: null,
            dataType: "json",
            success: function (data) {
                successCallback(data);
            }
        });
}

function getLesson(lessonId, successCallback) {
    $.ajax(
        {
            type: "GET",
            url: "api/getLesson.json",
            data: null,
            dataType: "json",
            success: function (data) {
                successCallback(data);
            }
        });
}