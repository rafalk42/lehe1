function getLessonList(successCallback)
{
  $.ajax(
  {
    type: "GET",
    url: "api/getLessonList.json",
    data: null,
    dataType: "json",
    success: function (data)
    {
      successCallback(data);
    }
  });
}