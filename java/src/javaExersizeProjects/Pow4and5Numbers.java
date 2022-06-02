package javaExersizeProjects;
import java.util.Scanner;

public class Pow4and5Numbers {
    public static void main(String[] args) {
        int number1=0;
        System.out.println("Please enter a number : ");
        Scanner scan=new Scanner(System.in);
        int scanned1=scan.nextInt();

        for (int i = 4; i <= scanned1; i=i*4) {
            System.out.println("Forth pow : "+i);
        }
        for (int i = 5; i <=scanned1 ; i=i*5) {
            System.out.println("Fifth pow : "+i);
        }
    }
}
