// initialize variable
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");

sidebarTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        sidebarTabs.forEach(tabs => tabs.classList.remove("hover"));
        tab.setAttribute("class", "hover");
    })
})

// Admin account
const campaignCards = document.querySelectorAll(".campaignCard");
const dashboardSection = document.getElementById("dashboardSection");
const feildReportSection = document.getElementById("feildReportSection");
const campaignSection = document.getElementById("campaignSection");
const employeesSection = document.getElementById("employeesSection");
const analyticSection = document.getElementById("analyticSection");
const earningsSection = document.getElementById("earningsSection");
const accountingSection = document.getElementById("accountingSection");
const directorySection = document.getElementById("directorySection");
const settingsSection = document.getElementById("settingsSection");
const helpSection = document.getElementById("helpSection");

// Dashboard section
function showDashboardSection(){
    dashboardSection.setAttribute("style", "display : block");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Field Report section
function showFieldReportSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : block");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Campaign section
function showCampaignSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : block");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
    campaignCards.forEach(tabs => tabs.setAttribute("style", "display : block"));
}

campaignCards.forEach((tab) => {
    tab.addEventListener("click", () =>{
        campaignCards.forEach(tabs => tabs.setAttribute("style", "display : none"));
    })
})

// Employees section
function showEmployeesSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : block");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Analytics section
function showAnalyticsSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : block");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Earnings section
function showEarningsSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : block");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Accounting section
function showAccountingSection(){
    dashboardSection.setAttribute("style", "display : none");
    feildReportSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : block");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Directory section
function showDirectorySection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : block");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Settings section
function showSettingsSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : block");
    helpSection.setAttribute("style", "display : none");
}

// Help section
function showHelpSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : block");
}


function tableSearchForResultCampaign(){
    let input, filter, table, tr, td, textvalue;

    input = document.getElementById('search2');
    filter = input.value.toUpperCase();
    table = document.getElementById('releaseddata');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            textvalue = td.textContent || td.innerText;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}

function submitReport(){
    location.reload();

}

function clearReport(){
    var timein = document.getElementById("timein");
    var timeout = document.getElementById("timeout");
    var dlnumber = document.getElementById("dlnumber");
    var remarks = document.getElementById("remarks");
    var radiobtn = document.getElementById("radiobtn");

    timein.value = "";
    timeout.value = "";
    dlnumber.value = "";
    remarks.value = "";
    radiobtn.value = "";
}