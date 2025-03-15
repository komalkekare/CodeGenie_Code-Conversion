import "./App.css";

import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homescreen } from "./Components/Homescreen";
import { MigrationScreen } from "./Components/MigrationScreen";
import { RepoDetails } from "./Components/MigrationPages/RepoDetails";
import { Deployment } from "./Components/MigrationPages/Deployment";
import { Rearchitect } from "./Components/MigrationPages/Rearchitect";
import { DatabaseMigration } from "./Components/MigrationPages/DatabaseMigration";
import { CodeMigrationScreen } from "./Components/MigrationPages/CodeMigration/CodeMigrationScreen";
import { file } from "jszip";

// Create a RepoContext
export const RepoContext = createContext({
  InputRepoCreds: null,
  InputRepo: null,
  selectedCloud: null,
  selectedRepo: null,
  repoDetailsForm: null,
  srcFileTree: null,
  allFileContents: null,
  repoDesc: null,
  repoCloudCom: null,
  repoMigrationStrat: null,
  repoSolutionRecomm: null,
  migrationR: null,
  applicationName: null,
  replatformDockerFile: null,
  replatformKubernetesFile: null,
  QAnswers: null,
  rearchExplain: null,
  refactoredCode1: null,
  namedFileContents: null,
  techDesc: null,
  filePathGeneral: null,
  setFilePathGeneral: null,
  filePathOutputGCP: null,
  filePathInputGCP: null,
  setFilePathOutputGCP: null,
  setFilePathInputGCP: null,
  filePathDestGCP: null,
  setFilePathDestGCP: null,
  inputTree: null,
  setInputTree: null,
  outputTree: null,
  setOutputTree: null,
  outputfilename: null,
  setOutputfilename: null,
  selectedTooltip: null,
  setSelectedTooltip: null,
  selectedConversion: null,
  setSelectedConversion: null,
  genarateDocumentation: null,
  setgenarateDocumentation: null,
  gcpPsudoCode: null,
  setgcpPsudoCode: null,
  value: null,
  setValue: null,
  valueoutput: null,
  setValueoutput: null,
  convertCodePusdo: null,
  setConvertCodePusdo: null,
  setPythonPsudo: null,
  pythonPsudo: null,
  selectedConversionValue: null,
  setselectedConversionValue: null,
});

function App() {
  const [InputRepoCreds, setInputRepoCreds] = useState(null);
  const [InputRepo, setInputRepo] = useState(null);
  const [selectedCloud, setSelectedCloud] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [repoDetailsForm, setRepoDetailsForm] = useState(null);
  const [currInputContent, setCurrInputContent] = useState({});
  const [srcFileTree, setSrcFileTree] = useState([]);
  const [code, setCode] = useState("code");
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [filePathGeneral, setFilePathGeneral] = useState(null);
  const [filePathInputGCP, setFilePathInputGCP] = useState(null);
  const [filePathOutputGCP, setFilePathOutputGCP] = useState(null);
  const [filePathDestGCP, setFilePathDestGCP] = useState(null);
  const [allFileContents, setAllFileContents] = useState(null);
  const [repoDesc, setRepoDesc] = useState(null);
  const [repoCloudCom, setRepoCloudCom] = useState(null);
  const [repoMigrationStrat, setRepoMigrationStrat] = useState(null);
  const [repoSolutionRecomm, setRepoSolutionRecomm] = useState(null);
  const [technology, setTechnology] = useState(null);
  const [migrationR, setMigrationR] = useState(null);
  const [applicationName, setApplicationName] = useState("");
  const [replatformDockerFile, setReplatformDockerFile] = useState("");
  const [replatformKubernetesFile, setReplatformKubernetesFile] = useState("");
  const [QAnswers, setQAnswers] = useState(null);
  const [ConfidenceScore, setConfidenceScore] = useState(null);
  const [rearchExplain, setRearchExplain] = useState("<Explanation/>");
  const [refactoredCode1, setRefactoredCode1] = useState("");
  const [namedFileContents, setNamedFileContents] = useState(null);
  const [allJson, setAllJson] = useState(null);
  const [techDesc, setTechDesc] = useState(null);
  const [startCleanup, setStartCleanup] = useState(false);
  const [rootMigrationIntent, setRootMigrationIntent] = useState("");
  const [suggestedRehost, setSuggestedRehost] = useState(null);
  const [suggestedReplatform, setSuggestedReplatform] = useState(null);
  const [suggestedRefactor, setSuggestedRefactor] = useState(null);
  const [terraformScript, setTerraformScript] = useState(null);
  const [terraformVariable, setTerraformVariable] = useState(null);
  const [inputRepoFormDataCreds, setInputRepoFormDataCreds] = useState(null);
  const [outputRepoFormDataCreds, setOutputRepoFormDataCreds] = useState(null);
  const [inputTree, setInputTree] = useState(null);
  const [outputTree, setOutputTree] = useState(null);
  const [inputCode, setInputCode] = useState({ content: "", ext: "" });
  const [classification, setClassification] = useState(null);
  const [outputCode, setOutputCode] = useState({ content: "", ext: "" });
  const [finalLog, setFinalLog] = useState(null);
  const [resolveLog, setResolveLog] = useState(null);
  const [outputfilename, setOutputfilename] = useState(null);
  // const [selectedTooltip, setSelectedTooltip] = useState(null);
  const [selectedConversion, setSelectedConversion] = useState("Select Aim");
  const [selectedTooltip, setSelectedTooltip] = useState(null)
  const [genarateDocumentation, setgenarateDocumentation] = useState(null)
  const [gcpPsudoCode, setgcpPsudoCode] = useState(null)
  const [value, setValue] = useState('0');
  const [valueoutput, setValueoutput] = useState('');
  const [convertCodePusdo, setConvertCodePusdo] = useState(null);
  const [pythonPsudo, setPythonPsudo] = useState(null);
  const [selectedConversionValue, setselectedConversionValue] = useState(null)

  useEffect(() => {
    console.log("InputRepoCreds = ", InputRepoCreds);
    console.log("InputRepo = ", InputRepo);
    console.log("Selected Files = ", selectedFiles);
    console.log("filePathGeneral=", filePathGeneral);
    console.log("setfilePathGeneral=", setFilePathGeneral);
    console.log("filepathinputGCP=", filePathInputGCP);
    console.log("setfilepathInputGcp=", setFilePathInputGCP);
    console.log("filePathDestGCP=", filePathDestGCP);
    console.log("currInputContent = ", currInputContent);
    console.log("genarateDocumentation vlv= ", genarateDocumentation);
    if (currInputContent.content) {
      setCode(currInputContent.content);
    }
    console.log("src tree", srcFileTree);
    console.log("AllFileContents => ", allFileContents);
    console.log("Repo Description => ", repoDesc);
    console.log("Repo Cloud Compatibility => ", repoCloudCom);
    console.log("Technology selected => ", technology);
    console.log("MigrationR selected => ", migrationR);
    console.log("Application Name => ", applicationName);
    console.log("Replatform DockerFile => ", replatformDockerFile);
    console.log("Replatform Kubernetes file => ", replatformKubernetesFile);
    console.log("Code => ", code);
    console.log("Selected Cloud => ", selectedCloud);
    console.log("QAnswers =>", QAnswers);
    console.log("Confidence Score => ", ConfidenceScore);
    console.log("Refactored Code 1 => ", refactoredCode1);
    console.log("NamedFileContents => ", namedFileContents);
    console.log("All JSon Extracted services => ", allJson);
    console.log("Technical Description => ", techDesc);
    console.log("Cleanup => ", startCleanup);
    console.log("Root Migration Intent => ", rootMigrationIntent);
    console.log("Suggested Rehost => ", suggestedRehost);
    console.log("Suggested Replatform=> ", suggestedReplatform);
    console.log("Suggested Refactor => ", suggestedRefactor);
    console.log("Terraform Script => ", terraformScript);
    console.log("Terraform Variable => ", terraformVariable);
    console.log(
      "Input & Output repo creds => ",
      inputRepoFormDataCreds,
      outputRepoFormDataCreds
    );
    console.log("Input & Output Tree => ", inputTree, outputTree);
    console.log("Input & Output Code => ", inputCode, outputCode);
    console.log("classification => ", classification);
    console.log("Final Log & Resolve Log => ", finalLog, resolveLog);
    console.log(
      "outputfilename,setOutputfilename",
      outputfilename,
      setOutputfilename
    );
    console.log("selectedTooltip", selectedTooltip);
    console.log(
      "selected conversion",
      selectedConversion,
      "setSelectedConversion",
      setSelectedConversion
    );
    console.log("selectedTooltip", selectedTooltip)
  }, [
    InputRepoCreds,
    InputRepo,
    currInputContent,
    code,
    allFileContents,
    repoDesc,
    repoCloudCom,
    technology,
    migrationR,
    applicationName,
    replatformDockerFile,
    replatformKubernetesFile,
    QAnswers,
    selectedCloud,
    ConfidenceScore,
    refactoredCode1,
    namedFileContents,
    allJson,
    techDesc,
    rootMigrationIntent,
    terraformScript,
    terraformVariable,
    inputRepoFormDataCreds,
    outputRepoFormDataCreds,
    inputTree,
    selectedConversion,
    setInputTree,
    outputTree,
    setOutputTree,
    inputCode,
    classification,
    outputCode,
    finalLog,
    resolveLog,
    filePathGeneral,
    setFilePathGeneral,
    filePathOutputGCP,
    filePathInputGCP,
    setFilePathInputGCP,
    setFilePathOutputGCP,
    filePathDestGCP,
    setFilePathDestGCP,
    outputfilename,
    setOutputfilename,
    selectedTooltip,
    setSelectedTooltip,
    setSelectedConversion,
    genarateDocumentation,
    setgenarateDocumentation,
    gcpPsudoCode,
    setgcpPsudoCode,
    value,
    setValue,
    valueoutput,
    setValueoutput,
    convertCodePusdo,
    setConvertCodePusdo,
    setPythonPsudo,
    pythonPsudo,
    selectedConversionValue,
    setselectedConversionValue
  ]);

  return (
    <RepoContext.Provider
      value={{
        InputRepoCreds,
        InputRepo,
        selectedCloud,
        selectedRepo,
        repoDetailsForm,
        currInputContent,
        multiSelect,
        selectedFiles,
        filePathGeneral,
        filePathInputGCP,
        filePathOutputGCP,
        srcFileTree,
        code,
        allFileContents,
        repoDesc,
        repoCloudCom,
        repoMigrationStrat,
        repoSolutionRecomm,
        technology,
        migrationR,
        applicationName,
        replatformDockerFile,
        replatformKubernetesFile,
        QAnswers,
        ConfidenceScore,
        rearchExplain,
        refactoredCode1,
        namedFileContents,
        allJson,
        techDesc,
        startCleanup,
        rootMigrationIntent,
        suggestedRefactor,
        suggestedRehost,
        suggestedReplatform,
        terraformScript,
        terraformVariable,
        inputRepoFormDataCreds,
        outputRepoFormDataCreds,
        inputTree,
        outputTree,
        inputCode,
        classification,
        selectedTooltip,
        outputCode,
        finalLog,
        resolveLog,
        outputfilename,
        selectedConversion,
        genarateDocumentation,
        gcpPsudoCode,
        value,
        setPythonPsudo,
        selectedConversionValue,
        setselectedConversionValue,
        pythonPsudo,
        convertCodePusdo,
        setConvertCodePusdo,
        valueoutput,
        setValueoutput,
        setValue,
        setgcpPsudoCode,
        setgenarateDocumentation,
        setResolveLog,
        setFinalLog,
        setOutputCode,
        setInputCode,
        setClassification,
        setSelectedTooltip,
        setOutputTree,
        setInputTree,
        setOutputRepoFormDataCreds,
        setInputRepoFormDataCreds,
        setTerraformScript,
        setTerraformVariable,
        setSuggestedRefactor,
        setSuggestedRehost,
        setSuggestedReplatform,
        setRootMigrationIntent,
        setStartCleanup,
        setTechDesc,
        setAllJson,
        setNamedFileContents,
        setRefactoredCode1,
        setRearchExplain,
        setConfidenceScore,
        setQAnswers,
        setReplatformDockerFile,
        setReplatformKubernetesFile,
        setApplicationName,
        setMigrationR,
        setTechnology,
        setRepoDesc,
        setRepoCloudCom,
        setRepoMigrationStrat,
        setRepoSolutionRecomm,
        setAllFileContents,
        setCode,
        setSrcFileTree,
        setSelectedFiles,
        setFilePathGeneral,
        setFilePathInputGCP,
        setFilePathOutputGCP,
        setMultiSelect,
        setCurrInputContent,
        setRepoDetailsForm,
        setSelectedCloud,
        setInputRepo,
        setInputRepoCreds,
        setSelectedRepo,
        setOutputfilename,
        setSelectedConversion,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Homescreen />} />
          <Route path="/migration" element={<MigrationScreen />} />
          <Route path="/migration/database" element={<DatabaseMigration />} />
          <Route path="/migration/repodetails" element={<RepoDetails />} />
          <Route path="/migration/codemigration" element={<CodeMigrationScreen />} />
          <Route path="/migration/repodetails/deployment"
            element={<Deployment />}
          />
          <Route
            path="/migration/repodetails/rearchitect"
            element={<Rearchitect />}
          />
          <Route
            path="/migration/repodetails/rearchitect/deployment"
            element={<Deployment />}
          />

          <Route path="*" element={<Navigate replace to="/Home" />} />
        </Routes>
      </BrowserRouter>
    </RepoContext.Provider>
  );
}

export default App;
