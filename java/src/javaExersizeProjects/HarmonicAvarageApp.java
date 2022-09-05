package javaExersizeProjects;

public class HarmonicAvarageApp {
    public static void main(String[] args) {

        double divide = 0;
        double avarage = 0;
        int[] numbers = {1,5};

        for (int i = 0; i < numbers.length; i++) {
            for (int j = 1; j <= numbers[i]; j++) {
                divide += 1.0/j;
            }
        }
        avarage = divide/ numbers.length;
        System.out.println("Avarage Harmonic Numbers = " + avarage);
    }
}
