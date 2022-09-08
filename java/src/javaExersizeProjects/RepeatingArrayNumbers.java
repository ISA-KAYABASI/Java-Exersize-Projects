package javaExersizeProjects;

import jdk.jshell.EvalException;

import java.util.Arrays;

public class RepeatingArrayNumbers {
    public static void main(String[] args) {

        int[] numbersList = {10, 20, 20, 10, 10, 20, 5, 20};
        int repaet=0;
        int valueState=0;
        Arrays.sort(numbersList);
        System.out.println("Repeating Array Numbers");

        for (int i = 0; i < numbersList.length-1; i++) {
            if (valueState == numbersList[i]) {
            }else {
                for (int item : numbersList) {
                    if (numbersList[i] == item) {
                        repaet++;
                    }
                }
                System.out.println(numbersList[i] + " number repaet " + repaet + " times.");
                repaet = 0;
            }
            valueState = numbersList[i];
        }
    }
}
