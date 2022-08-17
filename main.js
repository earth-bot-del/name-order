student_array=[];
display_student=[];

function submit()
{
    
for(var j=1; j<=4; j++)
{
    var name_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_student);
    student_array.push(name_student);

}
length_student_array=student_array.length;
for(var k=0; k<length_student_array; k++)
{
    display_student.push("<h4> name - "+student_array[k]+"</h4>");
    console.log(display_student);
}
document.getElementById("display_name_with_commas").innerHTML=display_student;
var remove_commas=display_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student_array.sort();
    console.log(student_array);
    var display_student_sort=[];
    length_student_array=student_array.length;
    console.log(length_student_array);
    for(var k=0; k<length_student_array; k++)
{
    display_student_sort.push("<h4> name - "+student_array[k]+"</h4>");
    console.log(display_student_sort);
}
var remove_commas=display_student_sort.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
