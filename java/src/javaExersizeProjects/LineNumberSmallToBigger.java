package javaExersizeProjects;

import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class LineNumberSmallToBigger {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter number of list items ");
        int loopNumber=scanner.nextInt();


        int[] weekDays = new int[loopNumber];

        for (int i = 0; i < loopNumber; i++) {
            System.out.println("Please enter "+(i+1)+". list item : ");
            int listItem = scanner.nextInt();
            weekDays[i] = listItem;
        }
        Arrays.sort(weekDays);
        System.out.println("Array Items : "+Arrays.toString(weekDays));
    }

}
