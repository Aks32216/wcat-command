# **Wcat is a cli application**
## Used to do various operations on files
- Remove spaces
- Put line number
- write the content of several file into a single file
- append the content of several file into a single file

## Commands

- ## **wcat filepath1 filepath2 ...** -> displays the contents of the given files 

    ![command1](https://user-images.githubusercontent.com/56152715/170301353-80a9cb85-9197-4f90-8d26-7a358dcab19a.png)

- ## **wcat -s filepath1 filepath2 ...** -> displays the content of all files in terminal afer removing extra line breaks
    
    ### Content Before

    ![before](https://user-images.githubusercontent.com/56152715/170302726-21b5fa41-f021-43a9-b323-ec42970ab65a.png)

    ### Content After

    ![after](https://user-images.githubusercontent.com/56152715/170302721-5736539c-e7c0-488c-b041-e358ecc470c3.png)

- ## **wcat -n filepath1 filepath2 ...** -> Gives numbering to all lines
    
    ### Content Before

    ![before](https://user-images.githubusercontent.com/56152715/170304022-d24b91b3-3cdb-4010-aed9-eff3e05a1093.png)

    ### Content After

    ![after](https://user-images.githubusercontent.com/56152715/170304800-f09313a3-be1c-48c0-b59f-4f588cd681b9.png)

- ## **wcat -b filepath1 filepath2 ...**-> Gives numbering to non-empty lines

    ### Content Before

    ![before](https://user-images.githubusercontent.com/56152715/170304022-d24b91b3-3cdb-4010-aed9-eff3e05a1093.png)

    ### Content After

    ![after](https://user-images.githubusercontent.com/56152715/170305422-a716ec10-012a-4856-81ea-4cd084369071.png)


- ## **wcat file1path file2path ... > destFilePath** -> Copies the content of all the files to destFilePath

    ![concat](https://user-images.githubusercontent.com/56152715/170306196-073d98da-2f8c-4f58-bcd7-5739ac698b09.png)


- ## **wcat file1paht file2path ... >> destFilePath** -> appends the content of all filest to destFilePath

    ![concat](https://user-images.githubusercontent.com/56152715/170306900-aa14164b-93da-4898-8e42-36c58f4fc37d.png)

- # **All these Commands can be used in combination with each other**

    ![cobined](https://user-images.githubusercontent.com/56152715/170307862-c95938aa-4cbb-40a4-9a61-6b0d940c2b70.png)




## Notes

- -b and -n cannot be used together as they are conflicting
- if file does not exit it shows error