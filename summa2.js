function calculate(){
    const m1 = document.getElementById("TAMIL").value
    const m2 = document.getElementById("ENGLISH").value
    const m3 = document.getElementById("MATHS").value
    const m4 = document.getElementById("SCIENCE").value
    const m5 = document.getElementById("SOCIAL").value
    if(!m1 || !m2 ||!m3 ||!m4 ||!m5 ) {
      return document.getElementById("showdata").innerHTML="Enter all fields..."
    }
    const totalmarks = 
        parseFloat(m1)+
        parseFloat(m2)+
        parseFloat(m3)+
        parseFloat(m4)+
        parseFloat(m5);
        const percentageObtained = (totalmarks/500)*100;
        if (percentageObtained>=90 && percentageObtained<=100){
            grade="A"
        }
        else if (percentageObtained>=80 && percentageObtained<=89){
            grade="B"
        }
        else if (percentageObtained>=70 && percentageObtained<=79){
            grade="C"
        } else if (percentageObtained>=60 && percentageObtained<=69){
            grade="D"
        }
        else if (percentageObtained>=50 && percentageObtained<=59){
            grade="E"
        }
        else{ grade="Sorry you are Fail"}
        document.write("Totale : " +totalmarks+"<br>")
        document.write("Percentage : "+percentageObtained+"<br>")
        document.write("Grade : "+grade)
}