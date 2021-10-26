1. copy bundle_src content to bundle dir `cp -r bundle_src bundle`   
2. init the project `ent prj init`
3. Build all micro frontends`ent prj fe-build -a`
4. Initiate the publishing system `ent prj pbs-init`
5. Publish the bundle `ent prj pbs-publish`
6. Deploy the bundle to the Entando instance `ent prj deploy`
7. Install the bundle and override existing components `ent prj install --conflict-strategy=OVERRIDE`
