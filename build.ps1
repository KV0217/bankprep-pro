Write-Host "Building BankPrep Pro..." -ForegroundColor Cyan

if (!(Test-Path "public")) {
    New-Item -ItemType Directory -Path "public" | Out-Null
}

$files = @(
    "shell.html", "q.js", "q2.js", "q3.js", "q4.js", "q5.js",
    "fc.js", "fc2.js", "study.js", "study2.js", "desc_int.js",
    "vocab_gk.js", "mock_papers.js", "esi_notes.js", "gk_bank.js",
    "finance_mgmt.js", "quant_tricks.js", "model_essays.js",
    "reasoning_guide.js", "english_guide.js", "mega_content.js",
    "final_push.js", "banking_terms_ext.js", "di_mega.js",
    "english_rc.js", "computer_awareness.js", "static_gk.js",
    "vocab_mcq.js", "logic.js"
)

$missing = $files | Where-Object { !(Test-Path $_) }
if ($missing) {
    Write-Host "Missing files: $($missing -join ', ')" -ForegroundColor Red
    exit 1
}

Get-Content $files | Set-Content "public/index.html" -Encoding UTF8

$size = [math]::Round((Get-Item "public/index.html").Length / 1KB, 1)
Write-Host "Build complete: public/index.html ($size KB)" -ForegroundColor Green
