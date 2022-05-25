package javaExersizeProjects;

import java.util.Scanner;

public class AvarageSchoolNoteCalculation {
    public static void main(String[] args) {

        int mat,english,chemistry,physic;
        Scanner inp=new Scanner(System.in);
        System.out.println("Your Mat Note: ");
        mat= inp.nextInt();
        System.out.println("Your English Note: ");
        english= inp.nextInt();
        System.out.println("Your Chemistry Note: ");
        chemistry= inp.nextInt();
        System.out.println("Your Physic Note: ");
        physic= inp.nextInt();

        int total=(mat+english+chemistry+physic);
        double gpa=total/4;
        System.out.println("GPA: "+gpa);

        String passingOrFailed=(gpa>=50)?"You passed" : "You failed";
        System.out.println(passingOrFailed);
    }
}