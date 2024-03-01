const avg = parseInt(prompt('Enter Your Marks For Grading'));





if (avg < 40) {
    document.write(" Grade: F, " + avg);
}


else if (avg < 50) {
    document.write(" Grade: D , " + avg);
}


 else if (avg < 60) {
    document.write(" Grade: C , " + avg);
}

 else if (avg < 70) {
    document.write(" Grade: B , " + avg);
}

else if (avg < 80) {
    document.write(" Grade: A , " + avg);
} 
else if (avg <= 100) {
    document.write(" Grade: A* , " + avg);
} 
else if (avg > 100) {
    document.write(" Invalid  Marks ");
} 


