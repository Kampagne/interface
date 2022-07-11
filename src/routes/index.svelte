<script lang="ts">
    // import { Flex } from "src/components/containers.svelte";
    // import SinglePaneLayout from "src/components/layouts/single_pane_layout.svelte";
    // import { Accordion, AccordionItem } from "src/components/accordions.svelte";
    // import Button from "src/components/buttons/button.svelte";
    import { ChevronDownIcon } from 'svelte-feather-icons';
    import { Button, Accordion, AccordionSection } from 'attractions';

    import { MainContent, SinglePaneLayout, Flex } from 'src/libs/meadow-layouts/meadow-layouts.svelte';


    var text = "Hi there"
</script>
  
<SinglePaneLayout center>
    <!-- <SinglePaneLayout center bg_image='/background.svg'> -->

    <MainContent>
        <span slot="header">Welcome to Kampagne! { text }</span>

        <Flex slot="content" col>
            <p>Kampagne is a free, open-source, and decentralized web application made to help you manage your TTRPG Campaigns and Characters.</p>
            <p>Browse the menus below to see what that statement means in detail.</p>    
            
            <!-- <Accordion>
                <AccordionItem title="Kampagne is Free">
                    <strong>Kampagne will forever be a free product.</strong> There will never be ads, subscriptions, or anything else incentivizing you to 
                    give money to this service. This isn't one of <em>those</em> open-source projects that asks for contributions and then turns around and
                    asks you for $25/month to use it. <em><strong>I'm looking at you, Kanka!</strong></em>
                </AccordionItem>

                <AccordionItem title="Kampagne is Open-Source">
                    The source code that makes Kampagne work is completely open to the public, and licensed under AGPLV3. You can take and modify it to make
                    whatever you want! The loophole is that if you distribute your work, it has to be under a compatible license, and it has to come with your
                    source code. 
                    <a href="https://github.com/Kampagne" class="hover:underline text-blue-900 font-medium" target="_blank">
                        Click here to view the project in all its glory, and please feel free to contribute!
                    </a>
                </AccordionItem>

                <AccordionItem title="Kampagne is Decentralized">
                    <p><strong>Privacy</strong> is an important topic in today's world. With so many people making so much money off your personal information, 
                    it is important to know who you can trust.</p>

                    <p>
                        Kampagne is built around being decentralized. Your data is not backed up or stored on ANY servers! <em>So make sure you don't clear your 
                        browser's data for this site!</em> Servers are also limited to managing single campaigns, which helps ensure that centralization does not
                        happen!
                    </p> 
                </AccordionItem>
            </Accordion> -->
            <Accordion let:closeOtherPanels style="width:100%">
                <AccordionSection on:panel-open={closeOtherPanels}>
                    <div slot="handle" let:toggle>
                        <Button on:click={toggle} style="width:100%">
                            Kampagne is Free
                            <ChevronDownIcon size="20" class="ml accordion-chevron" />
                        </Button>
                    </div>
                    <strong>Kampagne will forever be a free product.</strong> There will never be ads, subscriptions, or anything else incentivizing you to 
                    give money to this service. This isn't one of <em>those</em> open-source projects that asks for contributions and then turns around and
                    asks you for $25/month to use it. <em><strong>I'm looking at you, Kanka!</strong></em>
                </AccordionSection>

                <AccordionSection on:panel-open={closeOtherPanels}>
                    <div slot="handle" let:toggle >
                        <Button on:click={toggle} style="width:100%">
                            Kampagne is Open-Source
                            <ChevronDownIcon size="20" class="ml accordion-chevron" />
                        </Button>
                    </div>
                    The source code that makes Kampagne work is completely open to the public, and licensed under AGPLV3. You can take and modify it to make
                    whatever you want! The loophole is that if you distribute your work, it has to be under a compatible license, and it has to come with your
                    source code. 
                    <a href="https://github.com/Kampagne" class="hover:underline text-blue-900 font-medium" target="_blank">
                        Click here to view the project in all its glory, and please feel free to contribute!
                    </a>
                </AccordionSection>

                <AccordionSection on:panel-open={closeOtherPanels}>
                    <div slot="handle" let:toggle >
                        <Button on:click={toggle} style="width:100%">
                            Kampagne is Decentralized
                            <ChevronDownIcon size="20" class="ml accordion-chevron" />
                        </Button>
                    </div>
                        <p><strong>Privacy</strong> is an important topic in today's world. With so many people making so much money off your personal information, 
                        it is important to know who you can trust.</p>

                        <p>
                            Kampagne is built around being decentralized. Your data is not backed up or stored on ANY servers! <em>So make sure you don't clear your 
                            browser's data for this site!</em> Servers are also limited to managing single campaigns, which helps ensure that centralization does not
                            happen!
                        </p> 
                </AccordionSection>
            </Accordion>

            <Button style="" filled>Let's Get Started</Button>
            <!-- <Button on:click={() => text = "Goodbye!"}>
                This is a test
            </Button> -->
        </Flex>

    </MainContent>

    <!-- <MainContent bgColor="#abcdef">
        <h1 slot="header">ARE YOU A BABY!?</h1>
        <p slot="content">If so, perform this one simple task for $1m!</p>
    </MainContent> -->

</SinglePaneLayout>

<!-- <style global>
    .accordion {
        width: 100%;
    }
</style> -->