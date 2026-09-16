$nodeExe = "C:\Users\uhiar\AppData\Local\Programs\nodejs\node.exe"
$scratchDir = "C:\Users\uhiar\.gemini\antigravity-ide\scratch\smbc-website"
$workspaceDir = $PSScriptRoot

Write-Host "Syncing workspace files..."
Copy-Item -Path "$workspaceDir\Pages\*" -Destination "$scratchDir\src\pages\" -Recurse -Force
Copy-Item -Path "$workspaceDir\Components\*" -Destination "$scratchDir\src\components\" -Recurse -Force
if (Test-Path "$workspaceDir\assets") {
    Copy-Item -Path "$workspaceDir\assets\*" -Destination "$scratchDir\src\assets\" -Recurse -Force
}
if (Test-Path "$workspaceDir\Core Application and Style\App.jsx") {
    Copy-Item -Path "$workspaceDir\Core Application and Style\App.jsx" -Destination "$scratchDir\src\App.jsx" -Force
}
if (Test-Path "$workspaceDir\Core Application and Style\index.css") {
    Copy-Item -Path "$workspaceDir\Core Application and Style\index.css" -Destination "$scratchDir\src\index.css" -Force
}

Write-Host "Building project with Vite..."
Push-Location $scratchDir
& $nodeExe "$scratchDir\node_modules\vite\bin\vite.js" build
Pop-Location

Write-Host "Updating workspace distribution files..."
Copy-Item -Path "$scratchDir\dist\*" -Destination "$workspaceDir\dist\" -Recurse -Force
Copy-Item -Path "$scratchDir\dist\index.html" -Destination "$workspaceDir\index.html" -Force
Copy-Item -Path "$scratchDir\dist\assets\*" -Destination "$workspaceDir\assets\" -Recurse -Force
Copy-Item -Path "$scratchDir\dist\assets\*" -Destination "$workspaceDir\Core Application and Style\assets\" -Recurse -Force

Write-Host "Build finished successfully!"
