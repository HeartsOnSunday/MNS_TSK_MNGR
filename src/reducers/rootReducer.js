const initState = {
  posts: [
    {
      id: "1",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry: "Backups are application aware/database aware",
      Priority: "1 - High"
    },
    {
      id: "2",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry: "Backups are compliant with data retention requirements",
      Priority: "1 - High"
    },
    {
      id: "3",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry:
        "Backups are configured at least daily for all servers to centralized local storage",
      Priority: "1 - High"
    },
    {
      id: "4",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry: "Backups are configured for desktops/notebooks",
      Priority: "1 - High"
    },
    {
      id: "5",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry: "Backups are securely stored (virtually and physically)",
      Priority: "1 - High"
    },
    {
      id: "6",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry:
        "Off-site backups are configured at least daily for all critical servers",
      Priority: "1 - High"
    },
    {
      id: "7",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry: "Servers have complete system image/clone backups configured",
      Priority: "2 - Medium"
    },
    {
      id: "8",
      Category: "Backup",
      Subcategory: "Configuration",
      Entry:
        "E-mail archving solution is in place if required for long-term retention",
      Priority: "3 - Low"
    },
    {
      id: "9",
      Category: "Backup",
      Subcategory: "Documentation",
      Entry: "Backup documentation exists for servers",
      Priority: "1 - High"
    },
    {
      id: "10",
      Category: "Backup",
      Subcategory: "Management",
      Entry: "Backup monitoring configured for daily failure detection",
      Priority: "1 - High"
    },
    {
      id: "11",
      Category: "Backup",
      Subcategory: "Management",
      Entry: "Individual data restore test successful - Local",
      Priority: "1 - High"
    },
    {
      id: "12",
      Category: "Backup",
      Subcategory: "Management",
      Entry: "Individual data restore test successful - Remote",
      Priority: "1 - High"
    },
    {
      id: "13",
      Category: "Backup",
      Subcategory: "Management",
      Entry: "Full system restore test successful - Local",
      Priority: "2 - Medium"
    },
    {
      id: "14",
      Category: "Backup",
      Subcategory: "Management",
      Entry: "Backup and restoration log exists",
      Priority: "3 - Low"
    },
    {
      id: "15",
      Category: "Backup",
      Subcategory: "Standardization",
      Entry: "Backups platform adheres to company standard",
      Priority: "1 - High"
    },
    {
      id: "16",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Adequate power exists for all servers/network equipment",
      Priority: "1 - High"
    },
    {
      id: "17",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry:
        "Administrative account created in Active Directory/Open Directory",
      Priority: "1 - High"
    },
    {
      id: "18",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Agent software is configured for automatic deployment (RMM)",
      Priority: "1 - High"
    },
    {
      id: "19",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "All key client fields documented",
      Priority: "1 - High"
    },
    {
      id: "20",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Temperature of network room / cooling configuration adequate",
      Priority: "1 - High"
    },
    {
      id: "21",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry:
        'All UPS devices are functioning normally with all status lights “green"',
      Priority: "2 - Medium"
    },
    {
      id: "22",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Automated shutdown of servers via UPS software is configured",
      Priority: "2 - Medium"
    },
    {
      id: "23",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Client category of A/B/C configured",
      Priority: "2 - Medium"
    },
    {
      id: "24",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "UPS devices are free of non-network devices",
      Priority: "2 - Medium"
    },
    {
      id: "25",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "All server/network room data cabling is neatly cable managed",
      Priority: "3 - Low"
    },
    {
      id: "26",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry:
        "All servers/network devices are patched according to best practices",
      Priority: "3 - Low"
    },
    {
      id: "27",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Existing/outgoing technology provider documented",
      Priority: "3 - Low"
    },
    {
      id: "28",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Keys collected and stored in lock box",
      Priority: "3 - Low"
    },
    {
      id: "29",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry:
        "Physical access to servers/network equipment is secure/restricted",
      Priority: "3 - Low"
    },
    {
      id: "30",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "Reasonable access to server room/network room/racks is possible",
      Priority: "3 - Low"
    },
    {
      id: "31",
      Category: "Environment",
      Subcategory: "Configuration",
      Entry: "UPS devices are within the useful life expectancy",
      Priority: "3 - Low"
    },
    {
      id: "32",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Active Directory password documented",
      Priority: "1 - High"
    },
    {
      id: "33",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Authorized contacts are documented/updated",
      Priority: "1 - High"
    },
    {
      id: "34",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Client team set",
      Priority: "1 - High"
    },
    {
      id: "35",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Current network diagrams exist",
      Priority: "1 - High"
    },
    {
      id: "36",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Current site list is accurate",
      Priority: "1 - High"
    },
    {
      id: "37",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Current user/employee list is accurate",
      Priority: "1 - High"
    },
    {
      id: "38",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Domain registrar information is documented",
      Priority: "1 - High"
    },
    {
      id: "39",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Internet Service Provider (ISP) information documented",
      Priority: "1 - High"
    },
    {
      id: "40",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Public-facing services requiring SSL certificates are documented",
      Priority: "1 - High"
    },
    {
      id: "41",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Standardized platforms are documented",
      Priority: "1 - High"
    },
    {
      id: "42",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Subnets created and documented",
      Priority: "1 - High"
    },
    {
      id: "43",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Default desktop Local Administrator password documented",
      Priority: "2 - Medium"
    },
    {
      id: "44",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Documentation delivered for anti-virus/patch management/agent",
      Priority: "2 - Medium"
    },
    {
      id: "45",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Photos of server / network rooms documented",
      Priority: "2 - Medium"
    },
    {
      id: "46",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "After-hours access process is documented",
      Priority: "3 - Low"
    },
    {
      id: "47",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "All servers/network devices physically labeled",
      Priority: "3 - Low"
    },
    {
      id: "48",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "All software licensing documented",
      Priority: "3 - Low"
    },
    {
      id: "49",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "All UPS devices are documented",
      Priority: "3 - Low"
    },
    {
      id: "50",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "All warranty documentation/certificates documented",
      Priority: "3 - Low"
    },
    {
      id: "51",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry:
        "Current network diagrams laminated and mounted in network/server room",
      Priority: "3 - Low"
    },
    {
      id: "52",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Current workstation inventory exists",
      Priority: "3 - Low"
    },
    {
      id: "53",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Floorplan of office exists",
      Priority: "3 - Low"
    },
    {
      id: "54",
      Category: "Environment",
      Subcategory: "Documentation",
      Entry: "Organizational chart documented",
      Priority: "3 - Low"
    },
    {
      id: "55",
      Category: "Environment",
      Subcategory: "Standardization",
      Entry: "Anti-spam adheres to company standard",
      Priority: "1 - High"
    },
    {
      id: "56",
      Category: "Environment",
      Subcategory: "Standardization",
      Entry: "Anti-virus ahderes to company standard",
      Priority: "1 - High"
    },
    {
      id: "57",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "A backup and disaster recovery plan is in place",
      Priority: "1 - High"
    },
    {
      id: "58",
      Category: "Governance",
      Subcategory: "Policy",
      Entry:
        "Data recovery and restoration retention requirements policy is defined",
      Priority: "1 - High"
    },
    {
      id: "59",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Patch management policy is defined and active",
      Priority: "1 - High"
    },
    {
      id: "60",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Remote email access policy is defined",
      Priority: "1 - High"
    },
    {
      id: "61",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Remote network access policy is defined",
      Priority: "1 - High"
    },
    {
      id: "62",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Remote smart phone access policy is defined",
      Priority: "1 - High"
    },
    {
      id: "63",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Change Management policy is defined and active",
      Priority: "2 - Medium"
    },
    {
      id: "64",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Mobile device standards policy exists",
      Priority: "2 - Medium"
    },
    {
      id: "65",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Prioritization of services/applications has been defined",
      Priority: "2 - Medium"
    },
    {
      id: "66",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Standard hardware configurations have been defined",
      Priority: "2 - Medium"
    },
    {
      id: "67",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Wireless access policy in place",
      Priority: "2 - Medium"
    },
    {
      id: "68",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Accetable Use Policy (AUP) is defined",
      Priority: "3 - Low"
    },
    {
      id: "69",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Naming standards policy exists",
      Priority: "3 - Low"
    },
    {
      id: "70",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Non-disclosure and confidentiality policy is defined",
      Priority: "3 - Low"
    },
    {
      id: "71",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Standard sales/invoicing terms and process have been defined",
      Priority: "3 - Low"
    },
    {
      id: "72",
      Category: "Governance",
      Subcategory: "Policy",
      Entry: "Standard/approved applications policy exists",
      Priority: "3 - Low"
    },
    {
      id: "73",
      Category: "Governance",
      Subcategory: "Procedure",
      Entry: "Site power down procedure documented",
      Priority: "1 - High"
    },
    {
      id: "74",
      Category: "Governance",
      Subcategory: "Procedure",
      Entry: "Site power up procedure documented",
      Priority: "1 - High"
    },
    {
      id: "75",
      Category: "Governance",
      Subcategory: "Procedure",
      Entry: "User Decommissioning/termination procedures are defined",
      Priority: "1 - High"
    },
    {
      id: "76",
      Category: "Governance",
      Subcategory: "Procedure",
      Entry: "User set-up procedure is defined",
      Priority: "1 - High"
    },
    {
      id: "77",
      Category: "Mobile",
      Subcategory: "Documentation",
      Entry: "Mobile device documentation exists",
      Priority: "3 - Low"
    },
    {
      id: "78",
      Category: "Mobile",
      Subcategory: "Security",
      Entry: "Mobile devices can be remotely wiped",
      Priority: "1 - High"
    },
    {
      id: "79",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Adequate LAN capacity exists to support network requirements",
      Priority: "1 - High"
    },
    {
      id: "80",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "All public-facing services are adequately secured",
      Priority: "1 - High"
    },
    {
      id: "81",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "All wireless traffic encrypted with a minimum of WPA2-PSK",
      Priority: "1 - High"
    },
    {
      id: "82",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Email platform is fully supported",
      Priority: "1 - High"
    },
    {
      id: "83",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Email server is protected by gateway anti-spam/anti-virus",
      Priority: "1 - High"
    },
    {
      id: "84",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Ethernet switches are managed devices from single vendor",
      Priority: "1 - High"
    },
    {
      id: "85",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Firewall/router configurations backed up",
      Priority: "1 - High"
    },
    {
      id: "86",
      Category: "Network",
      Subcategory: "Configuration",
      Entry:
        "Wireless hardware is sufficient to provide coverage/capacity for intended use",
      Priority: "1 - High"
    },
    {
      id: "87",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Adequate Internet capacity/performance exists",
      Priority: "2 - Medium"
    },
    {
      id: "88",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "All servers are connected at 1000Mbps or greater",
      Priority: "2 - Medium"
    },
    {
      id: "89",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "DNS forwarding is configured for on-premises DNS servers",
      Priority: "2 - Medium"
    },
    {
      id: "90",
      Category: "Network",
      Subcategory: "Configuration",
      Entry:
        "Failover/redundant internet is available in case of primary ISP failure",
      Priority: "2 - Medium"
    },
    {
      id: "91",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Internet network using non-routable (RFC1918) addressing",
      Priority: "2 - Medium"
    },
    {
      id: "92",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Outbound SMTP server is configured for on-premises email servers",
      Priority: "2 - Medium"
    },
    {
      id: "93",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Role/service account for tech@example.com configured",
      Priority: "2 - Medium"
    },
    {
      id: "94",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Switch configured according to best practices",
      Priority: "2 - Medium"
    },
    {
      id: "95",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Wireless provided by managed wireless access point (WAP)",
      Priority: "2 - Medium"
    },
    {
      id: "96",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Bandwidth is managed using Quality of Service (QoS)",
      Priority: "3 - Low"
    },
    {
      id: "97",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Firewall/router has been updated to latest stable firmware",
      Priority: "3 - Low"
    },
    {
      id: "98",
      Category: "Network",
      Subcategory: "Configuration",
      Entry:
        "Network switches/devices have been updated to latest stable firmw",
      Priority: "3 - Low"
    },
    {
      id: "99",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "Site-to-site VPN link exists for management",
      Priority: "3 - Low"
    },
    {
      id: "100",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "All routers and switches are set to NTP time sources",
      Priority: "2 - Medium"
    },
    {
      id: "101",
      Category: "Network",
      Subcategory: "Configuration",
      Entry: "All routers and switches are sending logs to central syslog",
      Priority: "2 - Medium"
    },
    {
      id: "102",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "3rd party web/cloud/hosting logins/passwords are documented",
      Priority: "1 - High"
    },
    {
      id: "103",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Administrative password documented for each network device",
      Priority: "1 - High"
    },
    {
      id: "104",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "All firewall/security devices are documented",
      Priority: "1 - High"
    },
    {
      id: "105",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "All network switches are documented",
      Priority: "1 - High"
    },
    {
      id: "106",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "All production domain names are documented",
      Priority: "1 - High"
    },
    {
      id: "107",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Anti-spam platform login/password is documented",
      Priority: "1 - High"
    },
    {
      id: "108",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "DNS hosting login/passwords are documented",
      Priority: "1 - High"
    },
    {
      id: "109",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Email hosting login/passwords are documented",
      Priority: "1 - High"
    },
    {
      id: "110",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Remote access processes are documented",
      Priority: "1 - High"
    },
    {
      id: "111",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Site-to-site / VPN links are documented",
      Priority: "1 - High"
    },
    {
      id: "112",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Web hosting logins/passwords are documented",
      Priority: "1 - High"
    },
    {
      id: "113",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Inbound services are documented",
      Priority: "2 - Medium"
    },
    {
      id: "114",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Wireless access points physically identified on floor plan",
      Priority: "3 - Low"
    },
    {
      id: "115",
      Category: "Network",
      Subcategory: "Documentation",
      Entry: "Wireless network SSID/authentication documented",
      Priority: "3 - Low"
    },
    {
      id: "116",
      Category: "Network",
      Subcategory: "Management",
      Entry: "Adequate switch performance/capacity exists",
      Priority: "2 - Medium"
    },
    {
      id: "117",
      Category: "Network",
      Subcategory: "Management",
      Entry: "Adequate wireless performance/capacity exists",
      Priority: "2 - Medium"
    },
    {
      id: "118",
      Category: "Network",
      Subcategory: "Management",
      Entry: "Firewalls/routers monitored",
      Priority: "2 - Medium"
    },
    {
      id: "119",
      Category: "Network",
      Subcategory: "Management",
      Entry: "Switch configurations backed up",
      Priority: "2 - Medium"
    },
    {
      id: "120",
      Category: "Network",
      Subcategory: "Management",
      Entry: "Network switches monitored with alerting",
      Priority: "3 - Low"
    },
    {
      id: "121",
      Category: "Network",
      Subcategory: "Security",
      Entry: "All firewall/switch/router passwords have been reset",
      Priority: "1 - High"
    },
    {
      id: "122",
      Category: "Network",
      Subcategory: "Security",
      Entry: "All unknown outbound/inbound access disabled",
      Priority: "1 - High"
    },
    {
      id: "123",
      Category: "Network",
      Subcategory: "Security",
      Entry:
        "Firewall administration account protected by unique strong password",
      Priority: "1 - High"
    },
    {
      id: "124",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Firewall configured to limit remote administration",
      Priority: "1 - High"
    },
    {
      id: "125",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Guest wireless traffic segregated from corporate LAN",
      Priority: "1 - High"
    },
    {
      id: "126",
      Category: "Network",
      Subcategory: "Security",
      Entry:
        "Network protected by commercially-supported hardware firewall/router",
      Priority: "1 - High"
    },
    {
      id: "127",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Network-level remote access is limited to authorized staff",
      Priority: "1 - High"
    },
    {
      id: "128",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Site-to-site / VPN links are audited/current",
      Priority: "1 - High"
    },
    {
      id: "129",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Strong passphrases in use for corporate wireless SSIDs",
      Priority: "1 - High"
    },
    {
      id: "130",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Firewall/router has intrusion detection/protection enabled",
      Priority: "2 - Medium"
    },
    {
      id: "131",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Inline anti-virus/anti-malware scanning exists",
      Priority: "2 - Medium"
    },
    {
      id: "132",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Network configuration changes are centrally managed/logged",
      Priority: "2 - Medium"
    },
    {
      id: "133",
      Category: "Network",
      Subcategory: "Security",
      Entry: "SPF record exists to prevent unsolicited/spam email",
      Priority: "2 - Medium"
    },
    {
      id: "134",
      Category: "Network",
      Subcategory: "Security",
      Entry:
        "Firewall rules set to filter email traffic to email provider only",
      Priority: "2 - Medium"
    },
    {
      id: "135",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Centralized authentication is in use for remote access",
      Priority: "2 - Medium"
    },
    {
      id: "136",
      Category: "Network",
      Subcategory: "Security",
      Entry:
        "Web content/filtering management system is in place and configured",
      Priority: "2 - Medium"
    },
    {
      id: "137",
      Category: "Network",
      Subcategory: "Security",
      Entry: "Workstation/server/network devices auto logoff or auto lock",
      Priority: "2 - Medium"
    },
    {
      id: "138",
      Category: "Network",
      Subcategory: "Standardization",
      Entry: "Firewall adheres to company standard",
      Priority: "1 - High"
    },
    {
      id: "139",
      Category: "Network",
      Subcategory: "Standardization",
      Entry: "Internet DNS adheres to company standard",
      Priority: "2 - Medium"
    },
    {
      id: "140",
      Category: "Network",
      Subcategory: "Standardization",
      Entry: "Remote access adheres to company standard",
      Priority: "2 - Medium"
    },
    {
      id: "141",
      Category: "Power",
      Subcategory: "Configuration",
      Entry:
        "UPS test has been run on all UPS devices to ensure they are functional",
      Priority: "1 - High"
    },
    {
      id: "142",
      Category: "Power",
      Subcategory: "Configuration",
      Entry: "UPS does not have a load of more than 50%",
      Priority: "2 - Medium"
    },
    {
      id: "143",
      Category: "Power",
      Subcategory: "Configuration",
      Entry: "UPS has adequate runtime capacity",
      Priority: "2 - Medium"
    },
    {
      id: "144",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Directory/DNS/DHCP configuration is documented",
      Priority: "1 - High"
    },
    {
      id: "145",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Email configuration is documented",
      Priority: "1 - High"
    },
    {
      id: "146",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "File Sharing configuration is documented",
      Priority: "1 - High"
    },
    {
      id: "147",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Internet connectivity/providers are documented",
      Priority: "1 - High"
    },
    {
      id: "148",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Management agent role is documented",
      Priority: "1 - High"
    },
    {
      id: "149",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Supported applications documented",
      Priority: "1 - High"
    },
    {
      id: "150",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Installation process for all LOB applications are defined",
      Priority: "2 - Medium"
    },
    {
      id: "151",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Supported services documented",
      Priority: "2 - Medium"
    },
    {
      id: "152",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Unsupported applications/services documented",
      Priority: "2 - Medium"
    },
    {
      id: "153",
      Category: "Roles",
      Subcategory: "Documentation",
      Entry: "Voice/PBX role is documented",
      Priority: "3 - Low"
    },
    {
      id: "154",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Active/Open Directory is configured according to best practices",
      Priority: "1 - High"
    },
    {
      id: "155",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers are connected to UPS with auto shutdown",
      Priority: "1 - High"
    },
    {
      id: "156",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers are joined/bound to Active/Open Directory domain",
      Priority: "1 - High"
    },
    {
      id: "157",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers are under valid/current vendor warranty",
      Priority: "1 - High"
    },
    {
      id: "158",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers configured with static network information",
      Priority: "1 - High"
    },
    {
      id: "159",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers have management agent software installed",
      Priority: "1 - High"
    },
    {
      id: "160",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers meet minimum Operating System specifications",
      Priority: "1 - High"
    },
    {
      id: "161",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "DFS is configured according to best practices if applicable",
      Priority: "1 - High"
    },
    {
      id: "162",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "DHCP/DNS is configured according to best practices",
      Priority: "1 - High"
    },
    {
      id: "163",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Exchange is configured according to best practices",
      Priority: "1 - High"
    },
    {
      id: "164",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Hyper-V servers are set to sync with authoritative time source",
      Priority: "1 - High"
    },
    {
      id: "165",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "IIS is configured according to best practices",
      Priority: "1 - High"
    },
    {
      id: "166",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Out-of-band remote access is configured for critical servers",
      Priority: "1 - High"
    },
    {
      id: "167",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Remote access via Kaseya/TeamViewer configured for servers",
      Priority: "1 - High"
    },
    {
      id: "168",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Roaming profiles are not in use (Windows)",
      Priority: "1 - High"
    },
    {
      id: "169",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Servers have adequate disk space on all volumes",
      Priority: "1 - High"
    },
    {
      id: "170",
      Category: "Server",
      Subcategory: "Configuration",
      Entry:
        "Servers have system volumes and non-system/data volumes separated",
      Priority: "1 - High"
    },
    {
      id: "171",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "SQL is configured according to best practices",
      Priority: "1 - High"
    },
    {
      id: "172",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Account lock-out duration - 15 minutes",
      Priority: "2 - Medium"
    },
    {
      id: "173",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Account lock-out threshold - 5 attempts",
      Priority: "2 - Medium"
    },
    {
      id: "174",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "AD servers are set to sync with Internet time",
      Priority: "2 - Medium"
    },
    {
      id: "175",
      Category: "Server",
      Subcategory: "Configuration",
      Entry:
        "Administrative accounts are strong with a minimum of 10 characters",
      Priority: "2 - Medium"
    },
    {
      id: "176",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All users are configured with secured personal folder on server",
      Priority: "2 - Medium"
    },
    {
      id: "177",
      Category: "Server",
      Subcategory: "Configuration",
      Entry:
        "Active Directory computer accounts / user accounts / groups separated",
      Priority: "3 - Low"
    },
    {
      id: "178",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "All servers have desktop branded",
      Priority: "3 - Low"
    },
    {
      id: "179",
      Category: "Server",
      Subcategory: "Configuration",
      Entry: "Server firmware/BIOS have been updated to latest stable firmware",
      Priority: "3 - Low"
    },
    {
      id: "180",
      Category: "Server",
      Subcategory: "Documentation",
      Entry: "All servers/storage devices individually documented",
      Priority: "1 - High"
    },
    {
      id: "181",
      Category: "Server",
      Subcategory: "Documentation",
      Entry: "Centralized anti-virus console login/password are documented",
      Priority: "1 - High"
    },
    {
      id: "182",
      Category: "Server",
      Subcategory: "Documentation",
      Entry: "Local administrator password documented for each server",
      Priority: "1 - High"
    },
    {
      id: "183",
      Category: "Server",
      Subcategory: "Documentation",
      Entry: "Server/application dependencies are documented",
      Priority: "1 - High"
    },
    {
      id: "184",
      Category: "Server",
      Subcategory: "Management",
      Entry: "Availability monitoring of key Windows services is configured",
      Priority: "1 - High"
    },
    {
      id: "185",
      Category: "Server",
      Subcategory: "Management",
      Entry: "Server monitoring has been verified/tested",
      Priority: "1 - High"
    },
    {
      id: "186",
      Category: "Server",
      Subcategory: "Management",
      Entry: "Adequate server performance/capacity exists",
      Priority: "2 - Medium"
    },
    {
      id: "187",
      Category: "Server",
      Subcategory: "Management",
      Entry: "Performance monitoring of key applications is configured",
      Priority: "2 - Medium"
    },
    {
      id: "188",
      Category: "Server",
      Subcategory: "Security",
      Entry: "All domain admin passwords have been reset",
      Priority: "1 - High"
    },
    {
      id: "189",
      Category: "Server",
      Subcategory: "Security",
      Entry:
        "All servers have standardized anti-virus/anti-spyware software installed",
      Priority: "1 - High"
    },
    {
      id: "190",
      Category: "Server",
      Subcategory: "Security",
      Entry: "All servers have up-to-date anti-virus/anti-spyware software",
      Priority: "1 - High"
    },
    {
      id: "191",
      Category: "Server",
      Subcategory: "Security",
      Entry: "All whitelisted server patches/updates are installed",
      Priority: "1 - High"
    },
    {
      id: "192",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Audit account settings are set",
      Priority: "2 - Medium"
    },
    {
      id: "193",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Files/folders are secured using Security Groups",
      Priority: "2 - Medium"
    },
    {
      id: "194",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Maximum security logs size set on servers",
      Priority: "2 - Medium"
    },
    {
      id: "195",
      Category: "Server",
      Subcategory: "Security",
      Entry: "No user accounts exist with non-expiring passwords",
      Priority: "2 - Medium"
    },
    {
      id: "196",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Password policy configured in Active/Open Directory",
      Priority: "2 - Medium"
    },
    {
      id: "197",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Require password immediately after sleep or screen saver begins",
      Priority: "2 - Medium"
    },
    {
      id: "198",
      Category: "Server",
      Subcategory: "Security",
      Entry:
        "Restrictive permissions exist to prevent unauthorized access to files/folders",
      Priority: "2 - Medium"
    },
    {
      id: "199",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Secondary administrator accounts exists in case of breach",
      Priority: "2 - Medium"
    },
    {
      id: "200",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Store password using reversible encryption - disabled",
      Priority: "2 - Medium"
    },
    {
      id: "201",
      Category: "Server",
      Subcategory: "Security",
      Entry: "Windows Firewall settings managed centrally in Active Directory",
      Priority: "2 - Medium"
    },
    {
      id: "202",
      Category: "Server",
      Subcategory: "Standardization",
      Entry: "Group policies deployed adhere to company standard",
      Priority: "1 - High"
    },
    {
      id: "203",
      Category: "Strategy",
      Subcategory: "Management",
      Entry: "Proactive management visits have been scheduled",
      Priority: "1 - High"
    },
    {
      id: "204",
      Category: "Strategy",
      Subcategory: "Management",
      Entry: "Technology Strategy Plan has been delivered",
      Priority: "1 - High"
    },
    {
      id: "205",
      Category: "Strategy",
      Subcategory: "Management",
      Entry: "Technology Strategy Plan meetings have been scheduled",
      Priority: "1 - High"
    },
    {
      id: "206",
      Category: "Strategy",
      Subcategory: "Management",
      Entry: "Monthly technology reporting is in place and current",
      Priority: "2 - Medium"
    },
    {
      id: "207",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All network printers configured with accurate name/location",
      Priority: "1 - High"
    },
    {
      id: "208",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All network printers shared via print server",
      Priority: "1 - High"
    },
    {
      id: "209",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry:
        "All workstations are joined/bound to Active/Open Directory domain",
      Priority: "1 - High"
    },
    {
      id: "210",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All workstations are running same Operating System",
      Priority: "1 - High"
    },
    {
      id: "211",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry:
        "All workstations have standardized anti-virus/anti-spyware software",
      Priority: "1 - High"
    },
    {
      id: "212",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All workstations meet minimum Operating System specifications",
      Priority: "1 - High"
    },
    {
      id: "213",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "At least 50% of workstations are under current vendor warranty",
      Priority: "1 - High"
    },
    {
      id: "214",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Files are automatically saved/stored on servers",
      Priority: "1 - High"
    },
    {
      id: "215",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Standardized productivity software on all workstations",
      Priority: "1 - High"
    },
    {
      id: "216",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Users are not local administrators",
      Priority: "1 - High"
    },
    {
      id: "217",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Workstations are configured for DHCP for IP configuration",
      Priority: "1 - High"
    },
    {
      id: "218",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All network printers deployed automatically",
      Priority: "2 - Medium"
    },
    {
      id: "219",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "All workstations are protected against electrical surge",
      Priority: "2 - Medium"
    },
    {
      id: "220",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Unnecessary services are disabled",
      Priority: "3 - Low"
    },
    {
      id: "221",
      Category: "Workstation",
      Subcategory: "Configuration",
      Entry: "Workstations are automatically backed up at least daily",
      Priority: "3 - Low"
    },
    {
      id: "222",
      Category: "Workstation",
      Subcategory: "Documentation",
      Entry: "Workstation set-up procedure is defined",
      Priority: "2 - Medium"
    },
    {
      id: "223",
      Category: "Workstation",
      Subcategory: "Documentation",
      Entry: "All network printers documented",
      Priority: "3 - Low"
    },
    {
      id: "224",
      Category: "Workstation",
      Subcategory: "Management",
      Entry:
        "All workstations have up-to-date anti-virus/anti-spyware software",
      Priority: "1 - High"
    },
    {
      id: "225",
      Category: "Workstation",
      Subcategory: "Management",
      Entry: "Adequate number of spare workstations (desktop and laptop) exist",
      Priority: "2 - Medium"
    },
    {
      id: "226",
      Category: "Workstation",
      Subcategory: "Management",
      Entry: "Workstation standard build image exists",
      Priority: "2 - Medium"
    },
    {
      id: "227",
      Category: "Workstation",
      Subcategory: "Management",
      Entry: "Workstations have adequate disk space on system volumes",
      Priority: "3 - Low"
    },
    {
      id: "228",
      Category: "Workstation",
      Subcategory: "Security",
      Entry: "All local administrator passwords have been reset",
      Priority: "1 - High"
    },
    {
      id: "229",
      Category: "Workstation",
      Subcategory: "Security",
      Entry: "All whitelisted workstation patches/updates are installed",
      Priority: "1 - High"
    },
    {
      id: "230",
      Category: "Workstation",
      Subcategory: "Security",
      Entry: "Notebooks have encryption (FileVault) configured",
      Priority: "1 - High"
    },
    {
      id: "231",
      Category: "Workstation",
      Subcategory: "Security",
      Entry: "Workstations protected by local software firewall",
      Priority: "1 - High"
    },
    {
      id: "232",
      Category: "Workstation",
      Subcategory: "Security",
      Entry: "Require password immediately after sleep or screen saver begins",
      Priority: "2 - Medium"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
