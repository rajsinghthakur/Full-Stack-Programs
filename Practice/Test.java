class test {
    public static void main(String[] args) {
        String s = "11001011100110011110";
        char c[] = s.toCharArray();
        int sum = 0, store = 0;
        // for (int j = 0; j < c.length; j++) {
        // sum = 0;
        for (int i = 0; i < c.length; i++) {
            if (c[i] == '1') {
                sum++;
            } else {
                if (store <= sum)
                    store = sum;
                sum = 0;
            }
        }
        // }
        System.out.println(store);
    }
}