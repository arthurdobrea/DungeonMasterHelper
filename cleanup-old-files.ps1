# Скрипт для удаления старых файлов Vite

Write-Host "Удаление старых файлов и папок Vite..." -ForegroundColor Yellow

# Удаление папок
$foldersToRemove = @("src", "dist", ".vite")
foreach ($folder in $foldersToRemove) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder
        Write-Host "✓ Удалена папка: $folder" -ForegroundColor Green
    } else {
        Write-Host "- Папка не найдена: $folder" -ForegroundColor Gray
    }
}

# Удаление файлов
$filesToRemove = @("index.html", "vite.config.ts", "tsconfig.node.json", "vite.svg")
foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        Remove-Item -Force $file
        Write-Host "✓ Удален файл: $file" -ForegroundColor Green
    } else {
        Write-Host "- Файл не найден: $file" -ForegroundColor Gray
    }
}

# Удаление Vite зависимостей из package.json (опционально)
Write-Host "`nСтарые файлы удалены!" -ForegroundColor Cyan
Write-Host "Вы можете удалить ненужные зависимости вручную:" -ForegroundColor Yellow
Write-Host "  - @vitejs/plugin-react" -ForegroundColor Gray
Write-Host "  - vite" -ForegroundColor Gray
Write-Host "  - @tailwindcss/vite" -ForegroundColor Gray
Write-Host "`nКоманда для удаления:" -ForegroundColor Yellow
Write-Host "  npm uninstall @vitejs/plugin-react vite @tailwindcss/vite" -ForegroundColor White

