function skillsMember()
{
    var member = new Object();
    member.name = "John";
    member.age = 25;
    member.skills = ["JavaScript", "HTML", "CSS"];
    member.address = {
        street: "123 Main St",
        city: "Pittsburgh",
        state: "PA"
    };
    member.sayName = function() {
        alert(this.name);
    };
    return member;
}