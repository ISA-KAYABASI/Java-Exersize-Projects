package javaExersizeProjects;

import java.util.Scanner;

public class calculaterProject {
    public static void main(String[] args) {

        Scanner firstNumber=new Scanner(System.in);
        System.out.println("Please enter first number");

        int firstValue=firstNumber.nextInt();
        System.out.println("1= + , 2= - , 3= * , 4= / ");
        int charValue=firstNumber.nextInt();
        int secondValue=firstNumber.nextInt();

        int totall=firstValue+secondValue;
        int minus=firstValue-secondValue;
        double multiple=firstValue*secondValue;
        double divide=firstValue/secondValue;

         if (charValue==1){
             System.out.println(firstValue+" + "+secondValue);
            System.out.println("Result numbers : "+totall);
         }else if (charValue == 2) {
             System.out.println(firstValue+" - "+secondValue);
            System.out.println("Result number : "+minus);

         }else if (charValue == 3) {
             System.out.println(firstValue+" * "+secondValue);
            System.out.println("Result number : "+multiple);

         }else if (charValue == 4) {
             System.out.println(firstValue+" / "+secondValue);
            System.out.println("Result number : "+divide);

         }else System.out.println("please enter valid information");

    }
}
