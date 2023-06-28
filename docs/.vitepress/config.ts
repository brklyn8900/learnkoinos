import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "Learn Koinos",
  description: "Build on the worlds first free-to-use blockchain, Koinos.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "https://learnkoinos.xyz" },
      // { text: "Blog", link: "/articles/" },
      { text: "Developer Tutorials", link: "/modules/" },
      { text: "7 Day Challenge", link: "/7_day_dapp/" },
      { text: "Basic Concepts", link: "/concepts/" },
      // { text: "Support This Project", link: "/support" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/koinos" }],

    sidebar: {
      '/modules/': [
        {
          text: "Module 1: The koinos-cli",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M1/1_introduction.md" },
            { text: "2. Installation", link: "/modules/M1/2_installation.md" },
            { text: "3. Generating a New Wallet", link: "/modules/M1/3_new-wallet.md" },
            { text: "4. Sending a token", link: "/modules/M1/4_send-token.md" },
            {
              text: "5. Interacting with Smart Contracts", link: "/modules/M1/5_interacting.md",
            },
            { text: "6. Setting RC Limits", link: "/modules/M1/6_set-rclimit.md" },
            { text: "7. Using the Faucet", link: "/modules/M1/using-the-faucet.md" },
          ],
        },
        {
          text: "Module 2: Managing Mana & RC Limits",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M2/1_introduction.md" },
            { text: "2. What is Mana?", link: "/modules/M2/2_what-is-mana.md" },
            { text: "3. Hold $KOIN get Mana", link: "/modules/M2/3_hold_koin_get_mana.md" },
            { text: "4. Mana Sharing ", link: "/modules/M2/4_mana-sharing.md" },
            { text: "5. Recharging Mana (free)", link: "/modules/M2/5_recharge.md" },
            { text: "6. The Intuitive Value of Mana ", link: "/modules/M2/6_price-of-mana.md" },
            { text: "7. RC Limits", link: "/modules/M2/7_rclimit.md" },
          ],
        },
        {
          text: "Module 3: Launch a Koinos Mining Node",
          collapsed: true,
          items: [
            {
              text: "1. Introduction Koinos Mining", link: "/modules/M3/1_introduction.md"
            },
            { text: "2. Downloading the Node", link: "/modules/M3/2_download-node.md" },
            { text: "3. Inital Setup ", link: "/modules/M3/3_init-setup.md" },
            { text: "4. Starting & Syncing", link: "/modules/M3/4_sync.md" },
            { text: "5. Block_producer Configuration", link: "/modules/M3/5_config.md" },
            { text: "6. Maintenance", link: "/modules/M3/6_maintenance.md" },
          ],
        },
        {
          text: "Module 4: The Smart Contract SDK",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M4/1_introduction.md" },
            { text: "2. Installing the SDK", link: "/modules/M4/2_installing_the_sdk.md" },
            { text: "3. The Hello World Project ", link: "/modules/M4/3_hello-world.md" },
            { text: "4. SDK Folder Structure", link: "/modules/M4/4_sdk_folder_structure.md" },
            { text: "5. Compile Your Contract", link: "/modules/M4/5_compile_your_contract.md" },
            { text: "6. Generating a Wallet", link: "/modules/M4/6_generate-wallet.md" },
            { text: "7. Upload Your Smart Contract via Koinos-CLI", link: "/modules/M4/7_upload-contract.md" },
            { text: "8. Interacting with myawesomecontract", link: "/modules/M4/8_interacting.md" },
          ],
        },
        {
          text: "Module 5: Launch an NFT on Koinos",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M5/1_introduction.md" },
            { text: "2. Clone The Repo", link: "/modules/M5/2_init-setup.md" },
            { text: "3. Customize The Contract", link: "/modules/M5/3_modify.md" },
            { text: "4. Compile and Build", link: "/modules/M5/4_compile.md" },
            { text: "5. Mint a collection", link: "/modules/M5/5_mint.md" },
          ],
        },
        {
          text: "Module 6: Launch a Token on Koinos",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M6/1_introduction.md" },
            { text: "2. Clone the Starter Contract", link: "/modules/M6/2_init-setup.md" },
            { text: "3. Modify The Contract", link: "/modules/M6/3_modify.md" },
            { text: "4. Compile and Deploy", link: "/modules/M6/4_compile.md" },
            { text: "5. Mint", link: "/modules/M6/5_mint.md" },
          ],
        },
        {
          text: "Module 7: Managing Storage Space on the blockchain",
          collapsed: true,
          items: [
            { text: "1. Introduction", link: "/modules/M7/1_introduction.md" },
            { text: "2. Setting up our Database", link: "/modules/M7/2_setup.md" },
          ],
        },
      ],
      '/7_day_dapp/': [
        {
          text: "Day 1: Introduction to Koinos and Blockchain Basics",
          collapsed: true,
          items: [
            { text: "Introduction", link: "/7_day_dapp/1.0_introduction.md" },
            { text: "Plan", link: "/7_day_dapp/1.1_planning.md" },
            { text: "Architect", link: "/7_day_dapp/1.2_architecture.md" },
          ],
        },
        {
          text: "Day 2: Developing the frontend",
          collapsed: true,
          items: [
            { text: "Front End", link: "/7_day_dapp/2.0_introduction.md" },
            { text: "Building Part 1", link: "/7_day_dapp/2.1_building_frontend.md" },
            { text: "Building Part 2", link: "/7_day_dapp/2.2_building_frontend.md" },
            { text: "Building Part 3", link: "/7_day_dapp/2.3_building_frontend.md" },
          ],
        },
        {
          text: "Day 3: Developing the backend",
          collapsed: true,
          items: [
            { text: "Back End", link: "/7_day_dapp/3.0_introduction.md" },
            { text: "Building Back End", link: "/7_day_dapp/3.1_building_backend.md" },
          ],
        },
        {
          text: "Day 4 & 5: Developing the Smart Contracts",
          collapsed: true,
          items: [
            { text: "Introduction to Smart Contracts", link: "/7_day_dapp/4.0_introduction.md" },
            { text: "Build Smart Contracts Part 1", link: "/7_day_dapp/4.1_building_smartcontract.md" },
            { text: "Build Smart Contracts Part 2", link: "/7_day_dapp/4.2_building_smartcontract.md" },
            { text: "Build Smart Contracts Part 3", link: "/7_day_dapp/4.3_building_smartcontract.md" },
          ],
        },
        {
          text: "Day 6: Tying everything together",
          collapsed: true,
          items: [
            { text: "Compiling Everything", link: "/7_day_dapp/6_compiling.md" },
          ],
        },
        {
          text: "Day 7: Deploying",
          collapsed: true,
          items: [
            { text: "Deploying to The Blockchain", link: "/7_day_dapp/7_deployment.md" },

          ],
        },
      ],
      '/concepts/': [
        {
          text: "What is Koinos?",
          collapsed: true,
          items: [
            { text: "The Koinos Blockchain", link: "/concepts/koinos_introduction.md" },
            { text: "Terminology", link: "/concepts/koinos_terminology.md" },
          ],
        },
        {
          text: "Mining",
          collapsed: true,
          items: [
            { text: "Koinos Nodes", link: "/concepts/koinos_nodes.md" },
          ],
        },
        {
          text: "Proof of Burn",
          collapsed: true,
          items: [
            { text: "Proof of Burn", link: "/concepts/koinos_pob.md" },
            { text: "Security of PoB", link: "/concepts/koinos_pob_security.md"},
            { text: "Calculating Block Reward", link: "/concepts/koinos_block-reward.md" },
            { text: "Calculating Mining Yield", link: "/concepts/koinos_yield.md" },
          ],
        },
        {
          text: "Koinos Wallets",
          collapsed: true,
          items: [
            { text: "Koinos CLI", link: "/concepts/wallets/koinoscli.md" },
            { text: "Kondor Wallet", link: "/concepts/wallets/kondor.md" },
            { text: "My Koinos Wallet", link: "/concepts/wallets/mkw.md" },
            { text: "Portal Wallet", link: "/concepts/wallets/portal.md" },
            { text: "Konio Wallet", link: "/concepts/wallets/konio.md" },
          ],
        },
      ]

    }

  },
});
