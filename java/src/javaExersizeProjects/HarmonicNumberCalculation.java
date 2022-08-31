package javaExersizeProjects;

import java.util.Scanner;

public class HarmonicNumberCalculation {
  public static void main(String[] args) {

      Scanner scanner= new Scanner(System.in);
      System.out.println("Please enter a number");
      int number1 = scanner.nextInt();
      double result1= 0;

      for (int i = 1; i <= number1; i++) {

          result1 += 1.0/i;
          System.out.println("result1 = " + result1);
      }

  }

}
