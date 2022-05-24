package javaExersizeProjects;

public class StudentGraduationNote {
    public static void main(String[] args) {
        int vize1 = (int) (Math.random() * 100 + 1);
        int vize2 = (int) (Math.random() * 100 + 1);
        int finalNote = (int) (Math.random() * 100 + 1);
        int gecmeNotu = (int) (vize1 * 0.25 + vize2 * 0.25 + finalNote * 0.50);


        int vize1t = (int) (Math.random() * 100 + 1);
        int vize2t = (int) (Math.random() * 100 + 1);
        int finalNotet = (int) (Math.random() * 100 + 1);
        int gecmeNotut = (int) (vize1t * 0.25 + vize2t * 0.25 + finalNotet * 0.50);

        int ortalama2 = (gecmeNotu + gecmeNotut) / 2;

        System.out.println("vize1 = " + vize1);
        System.out.println("vize2 = " + vize2);
        System.out.println("finalNote = " + finalNote);
        System.out.println("gecmeNotu = " + gecmeNotu);

        if (gecmeNotu < ortalama2) {
            System.out.println("Erdem Bu yil'ki sinavlardan kaldiniz gelecek yil tekrar deneyiniz");
        } else {
            System.out.println("Erdem Sinavlardan basarili bir sekilde gectiniz tebrik ederim");
        }

        System.out.println("vize1 = " + vize1t);
        System.out.println("vize2 = " + vize2t);
        System.out.println("finalNote = " + finalNotet);
        System.out.println("gecmeNotu = " + gecmeNotut);

        if (gecmeNotut < ortalama2) {
            System.out.println("Ahmet Bu yil'ki sinavlardan kaldiniz gelecek yil tekrar deneyiniz");
        } else {
            System.out.println("Ahmet Sinavlardan basarili bir sekilde gectiniz tebrik ederim");
        }

        System.out.println("Gecme notu ortalamasi " + ortalama2);

    }
    }


