public class FileService {

    public boolean isTextFile(String name){
        String[] split = name.split("\\.");
        if(split.length != 2)
            return false;
        if(split[0].equals(""))
            return false;
        return name.toLowerCase().endsWith(".txt");
    }

}
